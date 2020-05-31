import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListServiceService } from '../../list-service.service';
import { allResolved } from 'q';
import { Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
const shortid = require('shortid');
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { OrderPipe } from 'ngx-order-pipe';
import { UserServiceService } from '../../user-service.service';
import { SocketServiceService } from '../../socket-service.service';
import { SnotifyService } from 'ng-snotify';
import { SnotifyPosition } from 'ng-snotify';
import { Cookie } from 'ng2-cookies/ng2-cookies';


import * as $ from 'jquery';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  @ViewChild('modalContent1') modalContent1: TemplateRef<any>;
  @ViewChild('modalContent2') modalContent2: TemplateRef<any>;



  constructor(private snotifyService: SnotifyService, public userService: UserServiceService, public el: ElementRef, public listService: ListServiceService, public router: Router, public _router: ActivatedRoute, private modal: NgbModal, public socketService: SocketServiceService) { }


 //Declaring variables 
  public userId;
  public currentUserDetails;
  public collabVal = null;
  public currentItemValue = null;
  public currentItem = null;
  public currentList = null;
  public loading = false;
  public allUsers=[];
  public selectedUiList=null;
  public searchResult;
  searchName = '';
  modalReference = null;
  public config;
  public collabData;
  public notificationData =null;


  ngOnInit() {
    this.userId = this.userService.getUserInfoInLocalStorage().userId;
    this.checkauth();
    this.getCurrentUserInfo();
    this.register();
    this.getAllUsers();
    this.getAllLists();
    this.checkForChanges();
    this.refresh();
    this.newFriendNotification();
    this.requestRejectNotification();


//Handles Ctrl+Z on keyboard for undo action
    document.onkeydown = (event) =>{
     
      if(event.keyCode == 90 && event.ctrlKey){

        if(this.selectedUiList!=null)
        {
       
        this.undo(this.selectedUiList);
        }
        else
        {
          this.snotifyService.info('Please select the List.');

        }
      }

    }


//Handles Click event on cards and items added
    document.onclick = (event) => {

      let targetId = (<HTMLInputElement>event.target).className;
      let selectedCard=$((<HTMLInputElement>event.target)).closest('.card')[0];
      if(selectedCard!=undefined && selectedCard.id.includes('card_'))
      {
        if(this.selectedUiList!=null)
        {
        $('#card_'+this.selectedUiList).css('border','1px solid rgba(0,0,0,.125)');
        }       
        this.selectedUiList=selectedCard.id.split('card_')[1];
      }

      if (targetId.includes('node_')) {

        let currentlistId = $((<HTMLInputElement>event.target)).closest('div')[0].id;
        this.currentItem = targetId;
        this.currentList = currentlistId;
        if (!targetId.includes('fa-trash') &&!targetId.includes('fa-check-circle')) {
          if (targetId.includes('fa-edit')) {
            if ($((<HTMLInputElement>event.target))[0].title) {
              this.currentItemValue = $((<HTMLInputElement>event.target))[0].title;
            }
          }
          else {
            this.currentItemValue = null;
          }

          this.modalReference = this.modal.open(this.modalContent2);
        }
        else {
          this.saveUpdatedList();
        }

      }

    }

  }



//Used to add innerHTML for cards .i.e List,items
  public addhtml(cards) {

    let htmlObj = this.parseNodes(cards);
   let trashEle= $('.fa-trash');

   for(let ind=0;ind < trashEle.length;ind++)
   {
    trashEle[ind].style.color='#dc3545';
    trashEle[ind].style.cursor='pointer';

   }

   let editEle= $('.fa-edit');

   for(let ind=0;ind < editEle.length;ind++)
   {
    editEle[ind].style.color='#007bff';
    editEle[ind].style.cursor='pointer';

   }

   let addEle= $('.fa-plus');

   for(let ind=0;ind < addEle.length;ind++)
   {
    addEle[ind].style.color='green';
    addEle[ind].style.cursor='pointer';

   }

   let checkEle= $('.far.fa-check-circle');

   for(let ind=0;ind < checkEle.length;ind++)
   {
    checkEle[ind].style.color='orange';
    checkEle[ind].style.cursor='pointer';

   }


   let checkEle1= $('.fas.fa-check-circle');

   for(let ind=0;ind < checkEle1.length;ind++)
   {
    checkEle1[ind].style.color='green';
    checkEle1[ind].style.cursor='pointer';

   }

   $('.cardData').css('font-size','18px');
   $('.cardData').css('font-family','cursive');

   
   if(this.selectedUiList!=null)
   {
     $('#card_'+this.selectedUiList).css('border','2px solid black');     
   }

    return htmlObj.outerHTML;


  }//end of addHtml function


//Method to get all the users of the application
  public getAllUsers = () =>{

    let details={
      userId:this.userId
    }

    this.userService.getAllUsers(details).subscribe((response)=>{
      // console.log(response);
      if(response.status==200){

        
     this.allUsers=response.data;
     console.log(this.allUsers);

     for(let each of this.currentUserDetails.friendReq)
     {
       
       for(let ind of this.allUsers)
     {
       if(each.fromUserId==ind.userId){
         console.log(ind);

         this.allUsers[this.allUsers.indexOf(ind)].status='received';
       }
     
    }
  }


  for(let each of this.currentUserDetails.friendList)
  {
    
    for(let ind of this.allUsers)
  {
    if(each.fromUserId==ind.userId){
      console.log(ind);

      this.allUsers[this.allUsers.indexOf(ind)].status='done';
    }
  
 }
}
      }
      else if(response.status==404 || response.status==500)
      {
        this.snotifyService.create({
          title: `Error Occured`,
          body:`Something went wrong.Please login again.`,
          config: {
            position: SnotifyPosition.centerTop,
            type:'error'
          }
        })
      }
    });
    } // end of get all users method




  //Method to send userId to socket for registering the user
  public register = () => {

    this.socketService.sendUserId().subscribe((data) => {
      this.socketService.userId(this.userId);
    })

  } //  end of register method



  //Method to open modal for add/edit list 
  public processList(listId, cards, cardTitle) {
    this.currentList = listId;
    this.currentItemValue = cardTitle;
    this.modalReference = this.modal.open(this.modalContent1);
  } 
  //End of processList method


//Method to perform changes of particular card
  public saveUpdatedCard() {

    let currentListArr = this.currentList.split('_-_');


    if (this.modalReference != null && (currentListArr[0] == 'add')||currentListArr[0] == 'edit') {
      if( this.currentItemValue==null || this.currentItemValue=="")
      {
        this.snotifyService.info('Title cannot be empty');
        return;
      }

      this.closeModal();   
    }

    for (let each of this.allLists) {

      console.log(each);
      if (each.listId == currentListArr[1]) {

        if (currentListArr[0] == 'add') {
          each.cards.push({

            children: [],
            id: shortid.generate(),
            status: false,
            title: this.currentItemValue
          });

          
          this.notificationData=  {
            sender:this.userId,
            collabrators: each.collabrators,
            content: {
              info:  `New List Item "${this.currentItemValue}" added by ${this.currentUserDetails.firstName} ${this.currentUserDetails.lastName}`
            }
          }
      
        }
        else if (currentListArr[0] == 'edit') {

          this.notificationData=  {
            sender:this.userId,
            collabrators: each.collabrators,
            content: {
              info:  `List title changed from "${each.listName}" to "${this.currentItemValue}" by ${this.currentUserDetails.firstName} ${this.currentUserDetails.lastName}.`
            }
          }


        

          each.listName = this.currentItemValue;

         
        }


        this.updateList(each.listId, each.cards, each.listName);

        this.currentItemValue = null;



      }

    }

  }
  //End of saveUpdatedCard method

  

  //Method to perform undo action on card
  public undo(listId)
  {

    
    for (let list of this.allLists) {

      if (list.listId == listId) {

        

        
        list.cardsHistory.card.pop();
        list.cardsHistory.listStatus.pop();

        if(list.cardsHistory.card.length==0)
        {
          this.snotifyService.error('No History found.');
        }
        else
        {    
          let index = list.cardsHistory.card.length-1;
          let index1 = list.cardsHistory.listStatus.length-1;

          list.cards=list.cardsHistory.card[index];
          list.status=list.cardsHistory.listStatus[index1];

          console.log(list);
    
 
          this.notificationData=  {
            sender:this.userId,
            collabrators: list.collabrators,
            content: {
              info:  `Changes for list "${list.listName}" reverted by ${this.currentUserDetails.firstName} ${this.currentUserDetails.lastName}`
            }
          }
      

          this.listService.updateListUsingListId(list).subscribe((response) => {
            if (response.status == 200) {

  
              this.socketService.newChange(this.notificationData);
  
              this.getAllLists();
 
            }
           
  
  
          })
      
        }

      }
    }


  }
//End of undo method


 //Method to perform changes of particular list
  public updateList(listId, cards, title) {

    for (let list of this.allLists) {

      if (list.listId == listId) {


        list.cards = cards;
       list.cardsHistory.card.push(cards);
       list.cardsHistory.listStatus.push(list.status);
        list.title = title;

        this.listService.updateListUsingListId(list).subscribe((response) => {
          if (response.status == 200) {
            // alert('list updated successfully');

            // debugger;

            this.socketService.newChange(this.notificationData);

            this.getAllLists();



            //end

          }
          // event.target.value=''
          //this.showAdd(this.addCardEvent);


        });
      }

    }


  }
  //End of updateList method


  //method to mark list as open/closed
  public markListcomplete(each,status)
  {
    each.status=status;

    recurse(each.cards)

    function recurse(obj) {
      for ( var key in obj ) { // works for objects and arrays
        var item = obj[key];
        if ( typeof item === "object" )
          recurse(item);
        else{
          console.log(key,item);
          if(key=='status')
          {
            obj[key]=status;
          }
        }
      }
    }

    if(status)
    {
    this.notificationData=  {
      sender:this.userId,
      collabrators: each.collabrators,
      content: {
        info:  `List "${ each.listName}" marked as closed by ${this.currentUserDetails.firstName} ${this.currentUserDetails.lastName}.`
      }
    }
  }
  else
  {
    this.notificationData=  {
      sender:this.userId,
      collabrators: each.collabrators,
      content: {
        info:  `List "${ each.listName}" marked as open by ${this.currentUserDetails.firstName} ${this.currentUserDetails.lastName}.`
      }
    }

  }

  this.updateList(each.listId, each.cards, each.listName);

  }
  //End of markListcomplete


  //Method to check for changes performed by users
  public changeInfo;
  public checkForChanges = () => {

    this.socketService.check().subscribe((data) => {

      this.changeInfo = data.content.info
      this.snotifyService.success(data.content.info, {
        timeout: 5000,
        showProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true
      });
      this.getAllLists();

    })
  } // end of check for change method




//Method to update the List
  public saveUpdatedList() {

    let itemArr = this.currentItem;

    let listId = this.currentList;

    let notifUserId=this.userId;

    let notifUserDetails=this.currentUserDetails;

    let notificationData=this.notificationData;

    let currentItemValue = this.currentItemValue
    console.log(itemArr);

    let itemId = itemArr.replace(/  +/g, ' ').split(' ')[2].split('node_')[1];

    let itemClass = itemArr.replace(/  +/g, ' ').split(' ')[1];


    console.log(itemClass);


    if (this.modalReference != null && itemClass=='fa-plus') {
      if( this.currentItemValue==null || this.currentItemValue=="")
      {
        this.snotifyService.info('Title cannot be empty');
        return;
      }

      this.closeModal();   
    }

      console.log(itemId);

      let listName='';
      let collabrators;


    for (let each of this.allLists) {

      console.log(each);
      if (each.listId == listId) {

        listName=each.listName;

        collabrators=each.collabrators;


        if (itemClass == 'fa-trash') {

          for (let ind in each.cards) {
            if (each.cards[ind].id == itemId) {
             

              notificationData=  {
                sender:notifUserId,
                collabrators: collabrators,
                content: {
                  info: `Item "${each.cards[ind].title}" of List "${listName}" deleted by ${notifUserDetails.firstName} ${notifUserDetails.lastName}.`
                }
              }

              each.cards.splice(ind, 1);

             
            
            }
            else
            {

              
              notificationData=  {
                sender:notifUserId,
                collabrators: collabrators,
                content: {
                  info:  `SubItems from List" ${listName}" deleted by ${notifUserDetails.firstName} ${notifUserDetails.lastName}.`
                }
              }

              removeFromTree(each.cards[ind], itemId);
              
            
            }
          }
        }
        else if(itemClass == 'fa-check-circle'){
          markComplete(each.cards)

        }
        else {
          recurse(each.cards);
        }

        this.notificationData=notificationData;

        this.updateList(listId, each.cards, listName);

        this.currentItemValue = null;


      }

    }

    function recurse(obj) {
      for (var key in obj) { // works for objects and arrays
        var item = obj[key];
        if (typeof item === "object")
          recurse(item);
        else {
          if (item == itemId) {

            //console.log(itemArr[1]);

            if (itemClass == 'fa-plus') {
              obj.children.push(
                {
                  children: [],
                  id: shortid.generate(),
                  status: false,
                  title: currentItemValue
                });

                notificationData=  {
                  sender:notifUserId,
                  collabrators: collabrators,
                  content: {
                    info:  `New Child Item "${currentItemValue}"  added to "${listName}" by ${notifUserDetails.firstName} ${notifUserDetails.lastName}.`
                  }
                }

       
            }
            else if (itemClass == 'fa-edit') {
              console.log(obj);

              notificationData=  {
                sender:notifUserId,
                collabrators: collabrators,
                content: {
                  info:  `Child Item title of List "${listName}" changed from "${obj.title}" to ${currentItemValue}" by ${notifUserDetails.firstName} ${notifUserDetails.lastName}.`
                }
              }

              obj.title = currentItemValue;
            }

          }
        }
      }
    }






    function markComplete(obj) { 
      for (var key in obj) { // works for objects and arrays
        var item = obj[key];
        if (typeof item === "object")
        markComplete(item);
        else {
          if (item == itemId) {

            markCheck(obj,!obj.status);

            if(!obj.status)
            {

              notificationData=  {
                sender:notifUserId,
                collabrators: collabrators,
                content: {
                  info:  `Item "${obj.title}" marked as open by ${notifUserDetails.firstName} ${notifUserDetails.lastName}.`
                }
              }
           
            }
            else
            {

              notificationData=  {
                sender:notifUserId,
                collabrators: collabrators,
                content: {
                  info:  `Item "${obj.title}" marked as closed by ${notifUserDetails.firstName} ${notifUserDetails.lastName}.`
                }
              }
              
            
            }
           

        }
      }
    }
  }

  function markCheck(obj,status) { 
    for (var key in obj) { // works for objects and arrays
      var item = obj[key];
      if (typeof item === "object")
      markCheck(item,status);
      else {
        
        obj.status=status;
    }
  }
}





    function removeFromTree(parent, childNameToRemove) {

      parent.children = parent.children
        .filter(function (child) { return child.id !== childNameToRemove })
        .map(function (child) { return removeFromTree(child, childNameToRemove) });
      return parent;
    }



  }
  //end of saveUpdatedList method




//Method to create tree structure using UL tags
  public parseNodes(nodes) { 
    var ol = document.createElement("UL");
    ol.className = "list-group list-group-flush";

    for (var i = 0; i < nodes.length; i++) {
      ol.appendChild(this.parseNode(nodes[i]));

    }

    return ol;

    
  }
  //end of parseNodes method


  //Method to create tree structure, submethod of parseNodes that creates LI tag
  public parseNode(node) {
    var li = document.createElement("LI");

    li.innerHTML += node.title; 

    if(node.status)
    {
      li.innerHTML += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="cursor: pointer;"  class="fas fa-check-circle node_` + node.id + `" ></i>`;
    }
    else
    {
      li.innerHTML += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="cursor: pointer;"  class="far fa-check-circle node_` + node.id + `" ></i>`;
    }

       
    li.innerHTML += `&nbsp;&nbsp;&nbsp;<i style="cursor: pointer;"  class="fas fa-trash node_` + node.id + `" ></i>`;
    li.innerHTML += `&nbsp;&nbsp;&nbsp;<i style="cursor: pointer;" title=` + node.title + ` class="fas fa-edit node_` + node.id + `" ></i>`;
    li.innerHTML += `&nbsp;&nbsp;&nbsp;<i  style="cursor: pointer;" class="fas fa-plus node_` + node.id + `" ></i>&nbsp;&nbsp;&nbsp;`;
    li.setAttribute('id', node.id);
    li.className = "list-group-item";

    if (node.children) {
      li.appendChild(this.parseNodes(node.children));

    }
    return li;
  }
  //end of parseNode method



//Method to Delete list
  public deleteList = (listId) => {


        let details = {
          listId: listId
        }

        
        for (let each of this.allLists) {
          if (each.listId == details.listId)
            
            this.notificationData=  {
              sender:this.userId,
              collabrators: each.collabrators,
              content: {
                info:  `List "${ each.listName}" deleted by ${this.currentUserDetails.firstName} ${this.currentUserDetails.lastName}.`
              }
            }

        }

        this.listService.deleteList(details).subscribe((response) => {
          if (response.status == 200) {


            this.getAllLists();
            // alert('list deleted successfully');

          


            this.socketService.newChange(this.notificationData);
          } // end


        })


   
  }
  //end of deleteList method


  //Method to check if user have authentication
  public checkauth = () => {

    if (Cookie.get('authToken') == '' || Cookie.get('authToken') == null || Cookie.get('authToken') == undefined || (!Cookie.get('authToken'))) {
      this.router.navigate(['/login'])
    }

  }
  //end of checkauth method


  //Method to get current user information
  public getCurrentUserInfo = () => {

    let details = {
      userId: this.userId
    }

    this.userService.getUserDetails(details).subscribe((response) => {

      //debugger;
      this.loading = true;

      console.log(response);
      if (response.status == 200) {
        this.currentUserDetails = response.data[0];
      }
    });

  } //  end of getCurrentUserInfo method


  
  public allLists;
  //Method to get all the list of the user
  public getAllLists = () => {

    this.listService.getAllListOfUser(this.userId).subscribe((response) => {

      console.log(response.status);

      if(response.status==200)
      {

      this.allLists = response.data;
      console.log(this.allLists)
      }
      else if(response.status==500)
      {
        this.logout();  
      }

    });

  } // end of getAllLists metod

  //Method to close the modal
  public closeModal() {
    this.modalReference.close();
  }
  //end of closeModal method


//Method to create new List
  public newList = () => {

    this.config = {
      labelField: 'label',
      valueField: 'value',
      maxItems: 10,
      highlight: true,
      create: false,
    };


    let currentUserDetails = this.currentUserDetails;

    this.collabData = [];
    for (let each of currentUserDetails.friendList) {
      this.collabData.push({ 'label': each.fromName, 'value': each.fromUserId });

    }

    this.modalReference = this.modal.open(this.modalContent)
  } // end of newList method



  //Method to save new list
  public newListName;
  public saveNew = () => {


        if(this.collabVal!=null)
        {
          this.collabVal.push(this.userId);
        }

        let details = {
          userId: this.userId,
          listName: this.newListName,
          cards: [],
          cardsHistory:{card:[],listStatus:[]},
          collabrators: this.collabVal
        }

        this.listService.createNewList(details).subscribe((response) => {
          if (response.status == 200) {
            // alert('new list create')
            this.snotifyService.success('New List created');

            this.closeModal();
            this.notificationData=  {
              sender:this.userId,
              collabrators: this.collabVal,
              content: {
                info:  `New List "${this.newListName}" added by ${this.currentUserDetails.firstName} ${this.currentUserDetails.lastName} with you as collabrator.`
              }
            }

            this.getAllLists();
        
            

            this.socketService.newChange(this.notificationData);


          }
        })

        this.newListName = '';


  } //  end of saveNew method


  //Method to handle keydown event on card modal
  public saveUpdatedCardKey = (event) =>{

    console.log(event);
    if(event.keyCode == 13){

      this.saveUpdatedCard();
      
    }
  } //  end of saveUpdatedCardKey method


  //Method to handle keydown event on list modal
  public saveUpdatedListkey = (event) =>{

    console.log(event);

    if(event.keyCode == 13){
      
  
      this.saveUpdatedList();
    }
  } //  end of saveUpdatedListkey method


 //Method to send friend request
public sendRequest = (data) =>{

  this.searchResult=data;


  if(this.currentUserDetails.userId == this.searchResult.userId){
      this.snotifyService.error('You cannot send a friend request to yourself')
  }
  else{
    

  let details = {

    userId:this.searchResult.userId,
    fromUserId:this.currentUserDetails.userId,
    fromName:this.currentUserDetails.firstName+' '+this.currentUserDetails.lastName,
    fromEmail:this.currentUserDetails.email
  }


  this.userService.sendFrndRequest(details).subscribe((response)=>{
  
    if(response.status==200){

    this.snotifyService.success('Friend request sent');
    this.socketService.frndRequestSent(details.userId);
    this.getCurrentUserInfo();
    this.getAllUsers();
  }

  });

}

} // end of sendRequest

//Method to accept friend request
public acceptRequest = (id) =>{
 
  let details = {
  userId:this.userId,
  fromUserId:id
}  

console.log(details);

  this.userService.acceptReq(details).subscribe((response)=>{
    if(response.status==200){
      // alert('user moved');
      this.getCurrentUserInfo();
      this.getAllUsers();
      let data = {
        id:details.fromUserId,
        name:this.currentUserDetails.firstName+' '+this.currentUserDetails.lastName
      }
      this.socketService.requestAccepted(data);
    }
  })

} //  end of acceptRequest

//Method to reject friend request
public rejectRequest = (id) =>{
 
  let details = {
  userId:this.userId,
  fromUserId:id
}  

console.log(details);

  this.userService.rejectUser(details).subscribe((response)=>{
    if(response.status==200){
      // alert('user moved');
      this.getCurrentUserInfo();
      this.getAllUsers();
      let data = {
        id:details.fromUserId,
        name:this.currentUserDetails.firstName+' '+this.currentUserDetails.lastName
      }
      this.socketService.requestAccepted(data);
    }
  })

} //  end of rejectRequest



//Method to check if any new friend request
public refresh = () =>{
  this.socketService.refresh().subscribe((data)=>{
    this.getCurrentUserInfo();
    this.getAllUsers();
    this.snotifyService.create({
      title: `request`,
      body: 'new friend request',
      config: {
        position: SnotifyPosition.centerTop,
        type:'success'
      }
    });
  }); 
} //  end of refresh


//Method to check if any Friend Request accepted
public newFriendNotification = () =>{
  this.socketService.newFriend().subscribe((data)=>{
    this.getCurrentUserInfo();
    this.getAllUsers();
    this.snotifyService.create({
      title: `Friend Request`,
      body:`Friend Request accepted by ${data.name}`,
      config: {
        position: SnotifyPosition.centerTop,
        type:'info'
      }
    }); 
  });
} //  end of newFriendNotification



//Method to check if any Friend Request rejected
public requestRejectNotification = () =>{
  this.socketService.rejectFriend().subscribe((data)=>{

    this.getCurrentUserInfo();

    this.getAllUsers();
   
    // this.snotifyService.info(`Friend request accepted by ${data.name}`);
    this.snotifyService.create({
      title: `Friend Request`,
      body:`Friend Request Rejected by ${data.name}`,
      config: {
        position: SnotifyPosition.centerTop,
        type:'info'
      }
    });

   
  });
} //  end of requestRejectNotification



//Method to logout of application
  public logout = () => {

    this.userService.deleteLocalStorage();
    Cookie.delete('authToken');
    this.router.navigate(['/home'])
  }
  // end of logout

//Method to show/hide friends section 
  public showSections = () => {
  
    if($('#right_column')[0].style.display!="block")
    {
      $('#right_column')[0].style.display="block";
      $('#searchCol')[0].style.display="block";
    }
    else
    {
      $('#right_column')[0].style.display="none";
      $('#searchCol')[0].style.display="none";
    }
  }
  //end of showSections

}
