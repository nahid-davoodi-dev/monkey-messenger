import React from 'react'
import ActionTypes from './ActionType';


export const INIT_STATE = {
  selectedChatId: 1,
  selectedMessegeHistoryId: 1,
  profileId: 1,
  users: [
    {
      userId: 1,
      avatar: "",
      name: "Esmaeil",
      family: "Abedi",
      mobileNumber: "",
      email: "",
      username: "",
      password: "",
      status: "",
    },
    {
      userId: 2,
      avatar: "",
      name: "Nahid",
      family: "Davoodi",
      mobileNumber: "",
      email: "",
      username: "",
      password: "",
      status: "",
    },
    {
      userId: 3,
      avatar: "",
      name: "Milad",
      family: "Pashaei",
      mobileNumber: "",
      email: "",
      username: "",
      password: "",
      status: "",
    },
  ],
  chatList: [
    {
      chatListId: 1,
      messegeHistoryId: 1,
      name: "Nahid Davoodi",
      time: "20min",
      unreadMessageCount: 0,
      avatar: "string",
      isPin: 1,
      lastMessage:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    },
    {
      chatListId: 2,

      messegeHistoryId: 2,
      name: "Milad Pashaee",
      time: "40min",
      unreadMessageCount: 9,
      avatar: "string",
      isPin: 0,
      lastMessage:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    },
    {
      chatListId: 3,

      messegeHistoryId: 2,
      name: "Pooriya Abedi",
      time: "1hr",
      unreadMessageCount: 1,
      avatar: "string",
      isPin: 2,
      lastMessage:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    },
    {
      chatListId: 4,

      messegeHistoryId: 2,
      name: "Mehran Ganji",
      time: "2hr",
      unreadMessageCount: 0,
      avatar: "string",
      isPin: 0,
      lastMessage:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    },
    {
      chatListId: 5,

      messegeHistoryId: 2,
      name: "Mohammad Massomi",
      time: "20:45",
      unreadMessageCount: 0,
      avatar: "string",
      isPin: 0,
      lastMessage:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    },
    {
      chatListId: 6,

      messegeHistoryId: 2,
      name: "Reza",
      time: "20:00",
      unreadMessageCount: 9,
      avatar: "string",
      isPin: 0,
      lastMessage:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    },
    {
      chatListId: 8,

      messegeHistoryId: 2,
      name: "Mostafa",
      time: "18:01",
      unreadMessageCount: 9,
      avatar: "string",
      isPin: 0,
      lastMessage:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    },
    {
      chatListId: 9,

      messegeHistoryId: 2,
      name: "Nahid Davoodi",
      time: "20min",
      unreadMessageCount: 0,
      avatar: "string",
      isPin: 1,
      lastMessage:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    },
    {
      chatListId: 10,
      messegeHistoryId: 2,
      name: "Milad Pashaee",
      time: "40min",
      unreadMessageCount: 19,
      avatar: "string",
      isPin: 0,
      lastMessage:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    },
    {
      chatListId: 11,
      messegeHistoryId: 2,
      name: "Pooriya Abedi",
      time: "1hr",
      unreadMessageCount: 1,
      avatar: "string",
      isPin: 2,
      lastMessage:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    },
    {
      chatListId: 12,
      messegeHistoryId: 2,
      name: "Mehran Ganji",
      time: "2hr",
      unreadMessageCount: 0,
      avatar: "string",
      isPin: 0,
      lastMessage:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    },
    {
      chatListId: 13,
      messegeHistoryId: 2,
      name: "Mohammad Massomi",
      time: "20:45",
      unreadMessageCount: 0,
      avatar: "string",
      isPin: 0,
      lastMessage:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    },
    {
      chatListId: 14,
      messegeHistoryId: 2,
      name: "Reza",
      time: "20:00",
      unreadMessageCount: 9,
      avatar: "string",
      isPin: 0,
      lastMessage:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    },
  ],
  messegeHistory: [
    {
      messegeHistoryId: 1,
      messeges: [
        {
          messegeId: 1,
          messegeHistoryId: 1,
          type: "text",
          messegeSenderId: 2,
          sendTime: "21:49",
          deliveredTime: "21:49",
          readTime: "21:54",
          content: "Hello Dear",
        },
        {
          messegeId: 2,
          messegeHistoryId: 1,
          type: "text",
          messegeSenderId: 2,
          sendTime: "21:54",
          deliveredTime: "21:54",
          readTime: "21:54",
          content: "Hello, How Are you? what are you doing?",
        },
        {
          messegeId: 3,
          messegeHistoryId: 1,
          type: "text",
          messegeSenderId: 2,
          sendTime: "21:55",
          deliveredTime: "21:55",
          readTime: "21:55",
          content:
            "Thanks am fine. u? I am working on my new chat app. thats fantastic.",
        },
        {
          messegeId: 4,
          messegeHistoryId: 1,
          type: "text",
          messegeSenderId: 1,
          sendTime: "21:55",
          deliveredTime: "21:55",
          readTime: "21:55",
          content: "What are you doing? everything ok? how are your kitty?",
        },
        {
          messegeId: 5,
          messegeHistoryId: 1,
          type: "text",
          messegeSenderId: 2,
          sendTime: "21:56",
          deliveredTime: "21:56",
          readTime: "21:57",
          content:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        },
        {
          messegeId: 6,
          messegeHistoryId: 1,
          type: "text",
          messegeSenderId: 2,
          sendTime: "21:57",
          deliveredTime: "21:57",
          readTime: "21:59",
          content:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        },
        {
          messegeId: 7,
          messegeHistoryId: 1,
          type: "text",
          messegeSenderId: 2,
          sendTime: "22:00",
          deliveredTime: "22:00",
          readTime: "22:00",
          content: "Ok Bye.",
        },
        {
          messegeId: 8,
          messegeHistoryId: 1,
          type: "text",
          messegeSenderId: 2,
          sendTime: "22:05",
          deliveredTime: "22:05",
          readTime: null,
          content:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        },
        {
          messegeId: 9,
          messegeHistoryId: 1,
          type: "text",
          messegeSenderId: 1,
          sendTime: "22:05",
          deliveredTime: "22:05",
          readTime: null,
          content:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        },
        {
          messegeId: 10,
          messegeHistoryId: 1,
          type: "text",
          messegeSenderId: 2,
          sendTime: "22:05",
          deliveredTime: "22:05",
          readTime: null,
          content:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        },
      ],
      senderId: 2,
      messegeHistoryClear: false,
    },
    
    {
      messegeHistoryId: 2,
      messeges: [
        {
          messegeId: 1,
          messegeHistoryId: 2,
          type: "text",
          messegeSenderId: 1,
          sendTime: "21:49",
          deliveredTime: "21:49",
          readTime: "21:54",
          content: "Hello Dear",
        },
        {
          messegeId: 2,
          messegeHistoryId: 2,
          type: "text",
          messegeSenderId: 3,
          sendTime: "21:54",
          deliveredTime: "21:54",
          readTime: "21:54",
          content: "Hello, How Are you? what are you doing?",
        },
      ],
      senderId: 3,
      messegeHistoryClear: false,
    },

    
  ],
  contacts: [
    {
      userId: 0,
      isBlock: false,
    },
  ],
  groups: [],
  channels: [],
};

export default function reducer(state=INIT_STATE,dispatch) {
  switch (dispatch.type) {
    case ActionTypes.getList:
      return state
      
     case ActionTypes.getMessages:
       return state
  
    default:
    return state
  }
}
