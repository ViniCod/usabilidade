import { Component} from "@angular/core";

@Component ({
    selector: "<primeiro-agular>",
    template: `
    <p>Meu primeiro projeto {{framework}}</p>
    `
})
export class PrimeiroAngularComponent {
    framework = "Angular";
}

