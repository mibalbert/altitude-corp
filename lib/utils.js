import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";


// export const UploadButton = generateUploadButton();
// export const UploadDropzone = generateUploadDropzone();


export const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg;

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
export const documents = [
  {
    id: "document789",
    title: "Document 1",
    userId: "user123",
    isArchived: false,
    parentDocument: null,
    content: [
      {
        id: "99dd86fd-a907-4f83-bc2c-31d5d22b4ed3",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "askjdn kjasndkjasn dkjas dnjaksd kajsdkjasdbaksjdb asndlasndkla slkd nalskdnl kasndkl naskdn alskdn lasn",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "2840ec26-6b9a-42d7-a3f2-43c2438498db",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "lanskdl",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "ee4920ab-4fa3-4c7e-b324-0c9417c6874a",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [],
        children: [],
      },
    ],
    coverImage:
      "https://fastly.picsum.photos/id/684/200/300.jpg?hmac=nn1tmB9fSTQO4MaL20HOedMOv4HNILJxIjPvOPhuxbE",
    icon: null,
    isPublished: true,
  },
  {
    id: "document469",
    title: "Document 2",
    userId: "user456",
    isArchived: true,
    parentDocument: "document789",
    content: [
      {
        id: "99dd86fd-a907-4f83-bc2c-31d5d22b4ed3",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "askjdn kjasndkjasn dkjas dnjaksd kajsdkjasdbaksjdb asndlasndkla slkd nalskdnl kasndkl naskdn alskdn lasn",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "2840ec26-6b9a-42d7-a3f2-43c2438498db",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "lanskdl",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "ee4920ab-4fa3-4c7e-b324-0c9417c6874a",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [],
        children: [],
      },
    ],
    coverImage:
      "https://fastly.picsum.photos/id/784/200/300.jpg?hmac=LIWlcHgxQH79XHKNji8Jin_KakntjYyd9VXyckNYFbE",
    icon: null,
    isPublished: false,
  },
  {
    id: "document129",
    title: "Document 3",
    userId: "user123",
    isArchived: false,
    parentDocument: "document101112",
    content: [],
    coverImage: null,
    icon: null,
    isPublished: true,
  },
  {
    id: "document424",
    title: "Document 4",
    userId: "user789",
    isArchived: true,
    parentDocument: null,
    content: [
      {
        id: "99dd86fd-a907-4f83-bc2c-31d5d22b4ed3",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "askjdn kjasndkjasn dkjas dnjaksd kajsdkjasdbaksjdb asndlasndkla slkd nalskdnl kasndkl naskdn alskdn lasn",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "2840ec26-6b9a-42d7-a3f2-43c2438498db",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "lanskdl",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "ee4920ab-4fa3-4c7e-b324-0c9417c6874a",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [],
        children: [],
      },
    ],
    coverImage:
      "https://fastly.picsum.photos/id/756/200/300.jpg?hmac=kojqQY60yVD4KaSEFOEw62LRuwfiOR2f-6ZdnEgKhxM",
    icon: null,
    isPublished: true,
  },
  {
    id: "document819",
    title: "Document 5",
    userId: "user456",
    isArchived: false,
    parentDocument: "document131415",
    content: [
      {
        id: "99dd86fd-a907-4f83-bc2c-31d5d22b4ed3",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "askjdn kjasndkjasn dkjas dnjaksd kajsdkjasdbaksjdb asndlasndkla slkd nalskdnl kasndkl naskdn alskdn lasn",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "2840ec26-6b9a-42d7-a3f2-43c2438498db",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "lanskdl",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "ee4920ab-4fa3-4c7e-b324-0c9417c6874a",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [],
        children: [],
      },
    ],
    coverImage:
      "https://fastly.picsum.photos/id/484/200/300.jpg?hmac=LJo8oIcz2tZ-i0B07bwzZT4WiREwRUYU5Rdl67Chww4",
    icon: null,
    isPublished: true,
  },
  {
    id: "document129",
    title: "Document 6",
    userId: "user789",
    isArchived: false,
    parentDocument: "document161718",
    content: [
      {
        id: "99dd86fd-a907-4f83-bc2c-31d5d22b4ed3",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "askjdn kjasndkjasn dkjas dnjaksd kajsdkjasdbaksjdb asndlasndkla slkd nalskdnl kasndkl naskdn alskdn lasn",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "2840ec26-6b9a-42d7-a3f2-43c2438498db",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "lanskdl",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "ee4920ab-4fa3-4c7e-b324-0c9417c6874a",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [],
        children: [],
      },
    ],
    coverImage:
      "https://fastly.picsum.photos/id/656/200/300.jpg?hmac=zNqhDDzELUTnZCZ7v7jsgm_qu5rVv4qCgahu6YqfG_A",
    icon: null,
    isPublished: false,
  },
];
