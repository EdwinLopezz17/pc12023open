import { Component, OnInit, ViewChild } from '@angular/core';
import { FullVenueService } from "../../../shared/Venue/service/full-venue.service";
import { Venue } from "../../../shared/Venue/models/Venue";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: 'app-see-venues',
  templateUrl: './see-venues.component.html',
  styleUrls: ['./see-venues.component.css']
})
export class SeeVenuesComponent implements OnInit {

  imgNotFound: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png";
  apiData: Array<any> = [];
  arrayVenues: Array<Venue> = [];

  displayedColumns: string[] = ['name', 'url', 'timezone', 'parkingDetail', 'imageUrl', 'city', 'country', 'address'];
  dataSource!: MatTableDataSource<Venue>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _apiFullVenue: FullVenueService) { }

  ngOnInit(): void {
    this._apiFullVenue.getAllVenues().subscribe((data: any) => {
      this.apiData = data["_embedded"].venues;
      this.arrayVenues = this.apiData.map((apiVenue: any) => ({
        name: apiVenue.name,
        url: apiVenue.url,
        timezone: apiVenue.timezone,
        parkingDetail: apiVenue.parkingDetail,
        imageUrl: apiVenue.images ? apiVenue.images[0].url : this.imgNotFound,
        city: apiVenue.city.name,
        address: apiVenue.address.line1,
        country: apiVenue.country.name
      }));

      this.dataSource = new MatTableDataSource(this.arrayVenues);
      this.loadPaginator();
    });
  }

  loadPaginator() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
