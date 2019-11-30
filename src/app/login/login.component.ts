import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Loginuser } from '../shared/loginuser';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  isSubmitted = false;
  login:Loginuser=new Loginuser();
  logins: Observable <Loginuser[]>;

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,private toastr:ToastrService) { }

  ngOnInit() {
    this.logins=this.authService.getLoginDet();
    this.loginForm=this.formBuilder.group({
      username: ['',Validators.compose([Validators.required])],
      password:['',[Validators.required]]
    });
  }

  get formControls()
  {
    return this.loginForm.controls;
  }

  loginUser()
  {
    this.login.username=this.loginForm.controls.username.value;
    this.login.password=this.loginForm.controls.password.value;
    console.log(this.loginForm.value);
    this.isSubmitted=true;
    this.login.usertype="";
    if(this.loginForm.invalid)
    {
      this.toastr.error('Enter username and password');
      return;
    }
   
   this.authService.login(this.login).subscribe(element => {
      
    if(element!=null)
    {
      this.login.usertype=element["usertype"];  
      console.log(this.login.usertype);   
      if(this.login.usertype=='Admin')
      {
        localStorage.setItem('ACCESS_TOKEN',this.login.username);
        this.router.navigateByUrl('list');
        this.toastr.success('Login Successful');
      }
      else
      {
        
        localStorage.setItem('ACCESS_TOKEN',this.login.username);
        this.router.navigateByUrl('purchaselist');
        this.toastr.success('Login Successful');
      }
    }
        else{
          this.toastr.error('Invalid Username or Password');
        }
      
      
      
    }
    
   ); 
 
  }

}
