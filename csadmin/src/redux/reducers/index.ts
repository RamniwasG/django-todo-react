const initialState: any = {
	locale: "EN",
	messages: ""
};

function appReducer(state = initialState, action: any) {
	switch (action.type) {
		default:
			return state;

	}
}

export default appReducer;
export {
	appReducer
};


// import { ConsulState } from "../types/consul.types";
// import { CounterState } from "./../model/counter/counter.types";
// import { LoginState } from "./../model/login/login.types";
// import { TaskState } from "./../model/task/task.types";
// import { TodosState } from "./../model/todos/todos.types";
// import consulReducer from "./consul.reducers";
// import counterReducer from "./../model/counter/counter.reducers";
// import loginReducer from "./../model/login/login.reducers";
// import { taskReducer } from "./../model/task/task.reducer";
// import { todosReducer, visibilityFilter } from "./../model/todos/todos.reducers";
// import { UserState } from "../model/user/user.types";
// import { userReducer } from "../model/user/user.reducers";
// import { oorState } from "../model/oor/oor.types";
// import { oorReducer } from "../model/oor/oor.reducers";

// export type AppState = {
// 	counter: CounterState;
// 	login: LoginState;
// 	todos: TodosState,
// 	task: TaskState,
// 	consul: ConsulState,
// 	user: UserState,
// 	oor: oorState,
// }

// export const appReducer = {
// 	todos: todosReducer,
// 	visibilityFilter,
// 	login: loginReducer,
// 	counter: counterReducer,
// 	task: taskReducer,
// 	consul: consulReducer,
// 	user: userReducer,
// 	oor: oorReducer,
// }
