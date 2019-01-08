const dev = {
  PW: [
    {
      startAddres: '2',
      Nregistrs: '8',
      functionQuery: 3,
      pacet: [
        {
          startRegistr: 1,
          name: 'p_oil1',
          description: 'Давление масла',
          unit: 'Bar',
          convertVal: 'readInt16LE',
          relation: 'convertData * 2',
          range: '100,100',
          history: '1',
          data: [],
        },
        {
          name: 'RPM2',
          convertVal: 'readInt16LE',
          startRegistr: 3,
          description: 'Скорость двигателя',
          data: [],
        },
        {
          name: 'RPM3',
          convertVal: 'readInt16LE',
          startRegistr: 5,
          description: 'Скорость двигателя',
          data: [],
        },
      ],
    },
    {
      startAddres: '6',
      Nregistrs: '8',
      functionQuery: 3,
      pacet: [
        {
          name: 'p_oil4',
          convertVal: 'readInt16LE',
          startRegistr: 1,
          description: 'Давление масла',
          data: [],
        },
        {
          name: 'RPM5',
          convertVal: 'readInt16LE',
          startRegistr: 1,
          description: 'Скорость двигателя',
          data: [],
        },
      ],
    },
    {
      startAddres: '44',
      Nregistrs: '4',
      typeD: 'PW',
      functionQuery: 3,
      pacet: [
        {
          name: 'p_oil6',
          convertVal: 'readInt16LE',
          startRegistr: 1,
          description: 'Давление масла',
          data: [],
        },
        {
          name: 'RPM7',
          convertVal: 'readInt16LE',
          startRegistr: 1,
          description: 'Скорость двигателя',
          data: [],
        },
      ],
    },
  ],
  PN: [
    {
      startAddres: '100',
      Nregistrs: '4',
      functionQuery: 3,
      pacet: [
        {
          name: 'p_oilPN8',
          convertVal: 'readInt16LE',
          startRegistr: 1,
          description: 'Давление масла',
          data: [],
        },
        {
          name: 'RPMPN9',
          convertVal: 'readInt16LE',
          startRegistr: 0,
          description: 'Скорость двигателя',
          data: [],
        },
        {
          name: 'RPMPN10',
          convertVal: 'readInt16LE',
          startRegistr: 0,
          description: 'Скорость двигателя',
          data: [],
        },
      ],
    },
    {
      startAddres: '20',
      Nregistrs: '10',
      functionQuery: 3,
      pacet: [
        {
          name: 'p_olPN11',
          convertVal: 'readFloatBE',
          startRegistr: 1,
          description: 'Давление масла',
          data: [],
        },
        {
          name: 'RPPN12',
          convertVal: 'readFloatBE',
          startRegistr: 0,
          description: 'Скорость двигателя',
          data: [],
        },
      ],

    },
  ],
};

module.exports.dev = dev;
