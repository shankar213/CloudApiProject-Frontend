import {Component, OnInit} from '@angular/core';
import {UtilsService} from "../../shared/services/utils.service";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor(public _utilService: UtilsService) {
  }

  ngOnInit(): void {
  }

}
