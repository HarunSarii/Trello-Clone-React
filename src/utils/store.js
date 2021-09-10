const cards = [
    {
        id: 'card-1',
        title: 'Make an early reservation',
    },
    {
        id: 'card-2',
        title: 'Prepare car for road trip',
    },
    {
        id: 'card-3',
        title: 'Search for beautiful places to see',
    },
];

const data = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'Todo',
            cards,
        },
        'list-2': {
            id: 'list-2',
            title: 'In Progress',
            cards: [],
        }
    },
    listIds: ['list-1', 'list-2'],

}

export default data;