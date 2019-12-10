import {observable, action, computed} from 'mobx';

class Order {

    @observable formData = [
        {
           name: 'name',
           label: 'Name',
           value: null,
           valid: ''
        },
        {
           name: 'phone',
           label: 'Phone',
           value: null,
           valid: ''
        },
        {
           name: 'email',
           label: 'E-mail',
           value: null,
           valid: ''
        }
     ];


     @computed get userInfo(){
         let info = {};

         this.formData.forEach((field) => {
             info[field.name] = field.value
         });

         return info
     }

     @action formChange(ind, val){
        this.formData[ind].value = val;
     }
}

export default new Order()

