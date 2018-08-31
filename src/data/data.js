let morning = {
    id: 1,
    title: 'Morning',
    todos: [
        {id: 0, text: 'Wake Up'},
        {id: 1, text: 'Shower'},
        {id: 2, text: 'Eat Breakfast'},
        {id: 3, text: 'Brush Teeth'},
        {id: 4, text: 'Put Clothes On'}
    ]
};
let day = {
    id: 2,
    title: 'Day',
    todos: [
        {id: 5, text: 'Go To Work'},
        {id: 6, text: 'Meetings'},
        {id: 7, text: 'Lunch'},
        {id: 8, text: 'Code'},
        {id: 9, text: 'Go Home'}
    ]
};
let evening = {
    id: 3,
    title: 'Evening',
    todos: [
        {id: 10, text: 'Gym'},
        {id: 11, text: 'Pub'},
        {id: 12, text: 'Food'}
    ]
};

let night = {
    id: 4,
    title: 'Night',
    todos: [
        {id: 13, text: 'Read'},
        {id: 14, text: 'Brush Teeth'},
        {id: 15, text: 'Sleep'}
    ]
};

let routines = [morning, day, evening, night];

export default routines;
