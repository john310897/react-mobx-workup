import { makeAutoObservable } from "mobx";
class AppState {
    obj = { name: 'john' }
    constructor() {
        makeAutoObservable(this)
    }
    updateState(updatedObj) {
        this.obj = { ...this.obj, ...updatedObj }
    }
}
export const globalAppState=new AppState()