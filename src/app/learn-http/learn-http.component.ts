import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'yc-learn-http',
  templateUrl: './learn-http.component.html',
  styleUrls: ['./learn-http.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class LearnHttpComponent implements OnInit {

  apiRoot: string = "http://httpbin.org";

  constructor(private http: Http) { }
  ngOnInit(): void {
  }

  doGET() {
    console.log("GET");
    let url = `${this.apiRoot}/get`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', 25);
    this.http.get(url, { search: search }).subscribe(res => console.log(res.json()));
  }
  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/delete`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', 25);
    this.http.delete(url, { search }).subscribe(res => console.log(res.json()));
  }
  doPUT() {
    console.log("PUT");
  }
  doDELETE() {
    console.log("DELETE");
  }
  doGETAsPromise() {
    console.log("GET AS PROMISE");
  }
  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
  }
  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
  }
  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
  }
}

}
