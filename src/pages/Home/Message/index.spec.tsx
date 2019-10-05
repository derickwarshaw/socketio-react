import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Message from './index';

import { UserMessage, MessageType } from 'models/Message';
import { User } from 'models/User';


const findByAttr = (component: ShallowWrapper, attr: string) => {
  return component.find(`[data-test="${attr}"]`);
};


describe('Message component', () => {

  describe('Have valid message', () => {
    let component: ShallowWrapper;
    let mockMessage: UserMessage;

    beforeEach(() => {
      mockMessage = new UserMessage({
        type: MessageType.user,
        body: 'Initial Message',
        user: new User('povalish'),
      });

      component = shallow(<Message message={mockMessage} />);
    });

    it('Should have a valid body message', () => {
      const body = findByAttr(component, 'body');
      expect(body.text()).toEqual(mockMessage.body);
    });

    it('Should have a user name', () => {
      const userName = findByAttr(component, 'userName');
      expect(userName.text()).toEqual(`${mockMessage.user.login}:`);
    });
  });


  describe('Have invalid message', () => {
    let component: ShallowWrapper;
    let mockMessage: any;

    beforeEach(() => {
      mockMessage = {
        type: MessageType.user,
        body: 'Initial Message',
        user: undefined,
      };

      component = shallow(<Message message={mockMessage} />);
    });

    it('Should have user placeholder', () => {
      const userName = findByAttr(component, 'userName');
      expect(userName.text()).toEqual('Unknown user:');
    });
  });

});
