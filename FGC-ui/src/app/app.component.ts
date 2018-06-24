import {Router, ActivatedRoute, Params, ParamMap,RoutesRecognized} from '@angular/router';
import {OnInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  public originalURL;
  public alteredURL;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
  }
}
