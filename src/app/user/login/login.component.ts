import { Component, OnInit,ElementRef } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
const shortid = require('shortid');
import {SnotifyService} from 'ng-snotify';
import {SnotifyPosition} from 'ng-snotify';
import { SocketServiceService } from '../../socket-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService:UserServiceService,public snortify:SnotifyService,public socketService:SocketServiceService,private elementRef: ElementRef) {

   }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.background="url('../../../assets/background.jpg') no-repeat center center fixed";
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize="cover";
  } 

  


  public email;
  public password;

  //Login Method
  public login =()=>{

    if(!this.email){
      this.snortify.error('Enter Email')
    }else if(!this.password){
      this.snortify.error('Enter Password')
    }else{

    let loginDetails = {
      email:this.email,
      password:this.password
    }

    this.userService.loginFunction(loginDetails).subscribe((response)=>{
      if(response.status === 200){
        this.snortify.success('Login successfull')
        Cookie.set('authToken',response.data.authToken);
        this.userService.setUserInfoInLocalStorage(response.data.userDetails);
        window.location.assign(`/to-do`); 
      }else{
          this.snortify.error('error occured')
      }

    },((err)=>{
      this.snortify.error('Incorrect credentials or user does not exist');
    }))
  }
  } // end of login method



  //Method to process forgot password
  public forgotPassword = () =>{

   if(!this.email){
     this.snortify.create({
      title: `Email Required`,
      body:`Please enter Email and then click on Forgot Password to recover Password.`,
      config: {
        position: SnotifyPosition.centerTop,
        type:'warning'
      }
    });
   }else{

    let details = {
      email:this.email,
      PasswordResetToken:shortid.generate(),
      PasswordResetExpiration: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    }
    
     this.userService.updateUserUsingEmail(details).subscribe((response)=>{
      
       if(response.data.nModified>0){
        let mailDetails = {
          receiver:this.email,
          subject:'To-Do App - Password Reset',
          html:`<p>Hi,</p><h4>Below is your password rest link, it is valid for a period of 24hrs</h4><br><p>http://to-doapp.tech2praveen.info/passwordReset/${details.PasswordResetToken}</p><br><p>Regards:</p><p>TO-DO App Team</p>`
        }
        this.socketService.sendMail(mailDetails);
              this.snortify.create({
            title: `Link sent`,
            body:`An email has been sent to you, please click on the link in the email to reset your password`,
            config: {
              position: SnotifyPosition.centerTop,
              type:'confirm'
            }
          })
       }else{
         this.snortify.error('No account found with Email')
       }
     },((err)=>{
      
      this.snortify.error('Error occured');

     }))
   }



  }

} // end of forgotPassword Method
