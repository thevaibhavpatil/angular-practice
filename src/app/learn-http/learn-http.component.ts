import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'yc-learn-http',
  templateUrl: './learn-http.component.html',
  styleUrls: ['./learn-http.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class LearnHttpComponent implements OnInit {

  apiRoot: string = "localhost:4200";

  constructor(private http: Http) { }
  ngOnInit(): void {
  }

  doGET() {
    console.log("GET");
    let url = `/assets/cacheEntry.json`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.get(url).subscribe(res => console.log(res.json()));/* , { search: search } */
  }
  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/post`;
    this.http.post(url, { moo: "foo", goo: "loo" }).subscribe(res =>
      console.log(res.json()));
  }
  doPUT() {
    console.log("PUT");
    let url = `${this.apiRoot}/put`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.put(url, { moo: "foo", goo: "loo" }, { search }).subscribe(res =>
      console.log(res.json()));
  }
  doDELETE() {
    console.log("DELETE");
    let url = `${this.apiRoot}/delete`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.delete(url, { search }).subscribe(res => console.log(res.json()));

  }
  doGETAsPromise() {
    console.log("GET AS PROMISE");
    let url = `${this.apiRoot}/get`;
    this.http.get(url)
      .toPromise()
      .then(res => console.log(res.json()));
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
