import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

	canActivate() {
		alert('Le guard a bien été appelé !');
		return true;
	}

}
