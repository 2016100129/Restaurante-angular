import { Component } from '@angular/core'; 
import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  instagram = faInstagram;
  facebook = faFacebookF;
  twitter = faTwitter;
  whatsapp = faWhatsapp;
}
