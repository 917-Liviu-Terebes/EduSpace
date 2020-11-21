import {Injectable} from '@angular/core';
import {first} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';
import auth = firebase.auth;

interface User {
    username: string,
    uid: string
}

@Injectable()
export class UserService {
    private user: User;

    constructor(private afAuth: AngularFireAuth) {

    }

    setUser(user: User) {
        this.user = user;
    }

    getUsername(): string {
        return this.user.username;
    }

    reAuth(username: string, password: string) {
        return this.afAuth.currentUser.then(
            user => user.reauthenticateWithCredential(auth.EmailAuthProvider.credential(username + '@codedamn.com', password))
        );
    }

    // updatePassword(newpassword: string) {
    //     return this.afAuth.auth.currentUser.updatePassword(newpassword);
    // }
    //
    // updateEmail(newemail: string) {
    //     return this.afAuth.auth.currentUser.updateEmail(newemail + '@codedamn.com');
    // }

    async isAuthenticated() {
        if (this.user) {
            return true;
        }

        const user = await this.afAuth.authState.pipe(first()).toPromise();

        if (user) {
            this.setUser({
                username: user.email.split('@')[0],
                uid: user.uid
            });

            return true;
        }
        return false;
    }

    getUID(): string {
        return this.user.uid
    }
}