import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AuthService } from './shared/services/auth.service'
import { HttpClient } from '@angular/common/http';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Custom, CustomA } from './app.model'
import { Cart } from './app.interface'
// declare var anhquy: Array<Custom>;
declare var window: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router:Router, private authervice:AuthService, private http: HttpClient ) {
    console.log(this.router.routerState.snapshot.url);
    
    this.connect()
  }
   auth:any = '';
   stompClient:any;
   anhquy: Array<Custom> = []; 
   broadcastMessage : Array<CustomA> = [];
  connect() {
    var socket = new SockJS('http://localhost:8082/javatechie') 
      this.stompClient = Stomp.over(socket);
      const _this = this
      console.log(_this.anhquy)
      this.stompClient.connect({}, function(){
        _this.stompClient.subscribe('/topic/pubic', _this.onMessageReceived);
      // Registering user to server as a public chat user
       _this.stompClient.send("/app/chat.register", {}, JSON.stringify({sender: 'anhquy', type: 'JOIN'}))
      }, 'loi');

  }
  onError (error:any){
      var socket = new SockJS('http://192.168.1.101:8082/javatechie') 
      this.stompClient = Stomp.over(socket);
      this.stompClient.connect({}, this.onConnected(), 'loi');
  }
  onConnected(){
    // Subscribing to the public topic
    this.stompClient.subscribe('/topic/pubic', this.onMessageReceived);
    // Registering user to server as a public chat user
    this.stompClient.send("/app/chat.register", {}, JSON.stringify({sender: 'anhquy', type: 'JOIN'}))
  }
  onMessageReceived = (payload:any):void => {
    var message = JSON.parse(payload.body);
    console.log(message.type)

    if (message.type === 'JOIN') {
      // alert(1)
      var _this = this
      let customObj = new Custom();
      customObj.name = "something";
      customObj.status = 'online'; 
      customObj.dateTime = 'message.dateTime'; 
      // var anhquy:any[] = [];
      console.log(_this.anhquy)
      // console.log(this.roomNotification)
      // console.log(this.stompClient)
      _this.anhquy.push(customObj)
      console.log(window)
      // setRoomNotification(roomNotification)
      // setBellRing(true)
      // console.log(this.roomNotification)
    }
    else if (message.type === 'LEAVE') {
      // roomNotification.map((notification:any, i:number) => {
      //   if (notification.sender === message.sender + " ~ joined") {
      //     notification.status = "offline";
      //     notification.sender = message.sender + " ~ left";
      //     notification.dateTime = message.dateTime;
      //   }
      // })
      // setRoomNotification(roomNotification)
     
      // setBellRing(true)
    }
    else if (message.type === 'TYPING') {
      // roomNotification.map((notification:any, i:number) => {
      //   if (notification.sender === message.sender + " ~ joined") {
      //     if (message.content)
      //       notification.status = "typing...";
      //     else
      //       notification.status = "online";
      //   }
      // })
      // setRoomNotification(roomNotification)
    }
    else if (message.type === 'CHAT') {
      // alert(1)
      // roomNotification.map((notification:any, i:number) => {
      //   if (notification.sender === message.sender + " ~ joined") {
      //     notification.status = "online";
      //   }
      // })
      var broadcastMessage:any[] = [];
      
      // console.log(this.roomNotification)
      // console.log(this.stompClient)
      this.broadcastMessage.push({
        message: message.content,
        sender: message.sender,
        dateTime: message.dateTime
      })
      console.log(this.broadcastMessage)
      // broadcastMessage.push({
      //   message: message.content,
      //   sender: message.sender,
      //   dateTime: message.dateTime
      // })
      // anhquy = broadcastMessage
      // setBroadcastMessage([...broadcastMessage])
      // // setBroadcastMessage(broadcastMessage)
      // setMessage('')
    }
    else {
      
    }  
  }
  ngOnInit() {
    this.authervice.auth$.subscribe(auth =>{
      this.auth = auth;
    })
    this.http.get('http://localhost:8082/allUser').subscribe(data => {
      console.log(data); // using the HttpClient instance, http to call the API then subscribe to the data and display to console
    });
    console.log('auth' + this.auth)
    if(this.auth == 'login'){
      this.router.navigate(['']);
    }else{
      this.router.navigate(['login']);
    }
    
  }
}


