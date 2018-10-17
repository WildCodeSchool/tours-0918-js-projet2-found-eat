export class LoginService {

	isAuth = false;

	login() {
		this.isAuth = true;
	}

	logout() {
		this.isAuth = false;
	}

}
