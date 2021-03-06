import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    username = '';
    password = '';

    constructor(public afAuth: AngularFireAuth, public user: UserService, public router: Router) {
    }

    ngOnInit() {
    }

    async login() {
        const {username, password} = this;
        try {
            // kind of a hack.
            const res = await this.afAuth.signInWithEmailAndPassword(username + '@eduspace.com', password);

            if (res.user) {
                this.user.setUser({
                    username,
                    uid: res.user.uid
                });
                this.router.navigate(['/tabs']);
            }

        } catch (err) {
            console.dir(err);
            if (err.code === 'auth/user-not-found') {
                console.log('User not found');
            }
        }
    }

}
