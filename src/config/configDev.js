const dev = {
  pump1: [
    {
      startAddres: '1',
      Nregistrs: '2',
      functionQuery: 3,
      pacet: [
        {
          startRegistr: 1,
          name: 'alarm_0',
          description: 'Частота ЧП',
          unit: 'Гц',
          convertVal: 'readInt16LE',
          relation: 'convertData * 2',
          range: '100,100',
          history: '1',
          data: [],
        },
      ],
    },
    {
      startAddres: '3',
      Nregistrs: '8',
      functionQuery: 3,
      pacet: [
        {
          startRegistr: 1,
          name: 'stationState',
          description: 'Сосотояние станции',
          unit: 'Bar',
          convertVal: 'readInt16LE',
          relation: 'convertData * 2',
          range: '100,100',
          history: '1',
          data: [],
        },
        {
          startRegistr: 3,
          name: 'FT_freq',
          convertVal: 'readInt16LE',
          description: 'Частота ЧП',
          data: [],
        },
        {
          startRegistr: 5,
          name: 'RPM3',
          convertVal: 'readInt16LE',
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
          name: 'alarm_2',
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
  PW: [
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
