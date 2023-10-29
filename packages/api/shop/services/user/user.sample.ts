import { plainToClass } from "class-transformer";
import User from "./user.type";

const loadUsers = (): User[] => {
  return plainToClass(User, [
    {
      id: 1,
      name: "Affan",
      email: "Affan",
      address: [
        {
          id: "12312",
          type: "primary",
          name: "Home",
          info: "A-168 Gulistan e Johar Block 7"
        },
        {
          id: "23423",
          type: "secondary",
          name: "Office",
          info: "SSUET"
        }
      ],
      contact: [
        {
          id: "88234",
          type: "primary",
          number: "202-555-0191"
        },
        {
          id: "23439",
          type: "secondary",
          number: "202-555-0701"
        }
      ],
      card: [
        {
          id: "179012",
          type: "primary",
          cardType: "paypal",
          name: "Affan",
          lastFourDigit: 2349
        },
        {
          id: "987234",
          type: "secondary",
          cardType: "master",
          name: "Affan",
          lastFourDigit: 8724
        },
        {
          id: "424987",
          type: "secondary",
          cardType: "visa",
          name: "Affan",
          lastFourDigit: 4535
        },
        {
          id: "455599",
          type: "secondary",
          cardType: "visa",
          name: "Affan",
          lastFourDigit: 4585
        }
      ]
    },
    {
      id: 2,
      name: "Jonathon Parker Doe ",
      email: "jpdoe@demo.com",
      address: [
        {
          id: "28764",
          type: "primary",
          name: "Home",
          info: "43 Street, 2341 Road Visalia, Ny 24252"
        },
        {
          id: "98242",
          type: "secondary",
          name: "Office",
          info: "29 Eve Street, 543 Evenue Road, Ny 87876"
        }
      ],
      contact: [
        {
          id: "12491",
          type: "primary",
          number: "202-555-0191"
        },
        {
          id: "12462",
          type: "secondary",
          number: "202-555-0191"
        }
      ],
      card: [
        {
          id: "345968",
          cardType: "paypal",
          name: "Jonathon Parker Doe",
          lastFourDigit: 8723
        },
        {
          id: "989433",
          cardType: "master",
          name: "Jonathon Parker Doe",
          lastFourDigit: 4352
        },
        {
          id: "787692",
          cardType: "visa",
          name: "Jonathon Parker Doe",
          lastFourDigit: 2398
        }
      ]
    }
  ]);
};

export default loadUsers;
