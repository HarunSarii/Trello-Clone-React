const cards = [
    {
        id: 'card-1',
        content: 'Make an early reservation',
    },
    {
        id: 'card-2',
        content: 'Prepare car for road trip',
    },
    {
        id: 'card-3',
        content: 'Search for beautiful places to see',
    },
];

const data = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'Todo',
            cards,
        }
    },
    listIds: ['list-1'],

}

export default data;