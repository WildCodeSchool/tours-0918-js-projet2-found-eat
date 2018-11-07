export class LoginService {

	isAuth = true;

	login() {
		this.isAuth = true;
	}

	logout() {
		this.isAuth = false;
	}

}
