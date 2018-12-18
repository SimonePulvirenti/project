const initState = {
    projects : [
        {id: '1', title:'ciao' ,content:'addd'},
        {id: '2', title:'cicccao' ,content:'addcacacd'},
        {id: '3', title:'ciacccccacao' ,content:'addcacd'}
    ]
    }

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT' :
        console.log('create', action.project);
        return state;
        case 'CREATE_PROJECT_ERROR':
        console.log('err', action.err);
        return state;
        default: return state;
    }
    
}

export default projectReducer