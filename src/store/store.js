import { atom } from "recoil";

const localStorageEffect = key => ({setSelf, onSet}) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
  
    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const AppInfomation = atom({
    key:"mustParkingApp",
    default:{
        usersInfo:{
         0:{
            userName:"유민국",
            userId:"jlkim909",
            userPassword:"alsrnr!904",
            userPhoneNum:"010-4992-4193",
            userTicketInfo:[
                {
                    storeName:"이디야 전북대점",
                    code:"CE7"
                },
                {
                    storeName:"파스꾸찌 전주DT점",
                    code:"CE7"
                },
                {
                    storeName:"주한장 전북대점",
                    code:"FD6"
                },
                {
                    storeName:"돈가스집",
                    code:"FD6"
                },
                {
                    storeName:"S-Oil",
                    code:"OL7"
                },
                {
                    storeName:"현대오일",
                    code:"OL7"
                },
                {
                    storeName:"E-Mart",
                    code:"MT1"
                },
                {
                    storeName:"롯데슈퍼",
                    code:"MT1"
                },
                {
                    storeName:"돈가스집",
                    code:"FD6"
                },
                {
                    storeName:"S-Oil",
                    code:"OL7"
                },
                {
                    storeName:"현대오일",
                    code:"OL7"
                },
                {
                    storeName:"E-Mart",
                    code:"MT1"
                },
                {
                    storeName:"롯데슈퍼",
                    code:"MT1"
                }
            ]
         }
        },
        storeInfo:[]
    },
    effects:[
        localStorageEffect('mustParkingApp'),
    ]
})