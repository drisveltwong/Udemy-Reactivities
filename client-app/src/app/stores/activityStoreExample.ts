import { makeAutoObservable } from 'mobx';

export default class ActivityStoreExample {
    title = 'Hello from MobX!';

    constructor() {
        /// we can also use makeAutoObservable(this) instead of makeObservable
        makeAutoObservable(this)
        // makeObservable(this, {
        //     title: observable,
        //     setTitle: action
        // })
    }

    /// action.bound is used to bind the function to the class, 
    /// it allow the function to use the attribute in the class
    /// we can also use setTitle = () => to achieve this
    setTitle = () => {
        this.title = this.title + '!';
    }
}