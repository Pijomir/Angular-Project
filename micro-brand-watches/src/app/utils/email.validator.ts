import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]): ValidatorFn {
    const domainStr = domains.join('|');
    const regExp = new RegExp(`^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(${domainStr})$`);


    return (control) => {
        const isInvalid = control.value === '' || regExp.test(control.value);

        return isInvalid ? null : { emailValidator: true };
    };
} 