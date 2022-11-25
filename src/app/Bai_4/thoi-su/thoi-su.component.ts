import { Component, OnInit } from '@angular/core';

interface thoisu {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-thoi-su',
  templateUrl: './thoi-su.component.html',
  styleUrls: ['./thoi-su.component.css']
})
export class ThoiSuComponent implements OnInit {
  public posted: thoisu[] = [
    {
      id: 1,
      title: 'Tỉnh Bình Phước',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquid deserunt eligendi, ex expedita fuga fugit harum incidunt ipsam laborum maiores modi nemo non odit possimus provident quam quidem quo quod repellendus sequi soluta tempora vero vitae voluptas, voluptate voluptates. Aperiam, blanditiis error eum, ex exercitationem expedita explicabo fuga mollitia nam porro quam quo rerum sapiente similique sint totam ullam vero. Ad atque, commodi debitis dolorum est id iusto, nam nemo optio possimus reiciendis sed, sint tenetur. Ad adipisci beatae dicta esse eum hic illo necessitatibus placeat recusandae rem. Debitis deserunt dolore ducimus earum eveniet laborum nulla pariatur rerum!'
    },
    {
      id: 2,
      title: 'Tỉnh Quảng Ninh',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquid deserunt eligendi, ex expedita fuga fugit harum incidunt ipsam laborum maiores modi nemo non odit possimus provident quam quidem quo quod repellendus sequi soluta tempora vero vitae voluptas, voluptate voluptates. Aperiam, blanditiis error eum, ex exercitationem expedita explicabo fuga mollitia nam porro quam quo rerum sapiente similique sint totam ullam vero. Ad atque, commodi debitis dolorum est id iusto, nam nemo optio possimus reiciendis sed, sint tenetur. Ad adipisci beatae dicta esse eum hic illo necessitatibus placeat recusandae rem. Debitis deserunt dolore ducimus earum eveniet laborum nulla pariatur rerum!'
    },
    {
      id: 3,
      title: 'Tỉnh Hà Tĩnh',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquid deserunt eligendi, ex expedita fuga fugit harum incidunt ipsam laborum maiores modi nemo non odit possimus provident quam quidem quo quod repellendus sequi soluta tempora vero vitae voluptas, voluptate voluptates. Aperiam, blanditiis error eum, ex exercitationem expedita explicabo fuga mollitia nam porro quam quo rerum sapiente similique sint totam ullam vero. Ad atque, commodi debitis dolorum est id iusto, nam nemo optio possimus reiciendis sed, sint tenetur. Ad adipisci beatae dicta esse eum hic illo necessitatibus placeat recusandae rem. Debitis deserunt dolore ducimus earum eveniet laborum nulla pariatur rerum!'
    },
    {
      id: 4,
      title: 'Tỉnh Bắc Giang',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquid deserunt eligendi, ex expedita fuga fugit harum incidunt ipsam laborum maiores modi nemo non odit possimus provident quam quidem quo quod repellendus sequi soluta tempora vero vitae voluptas, voluptate voluptates. Aperiam, blanditiis error eum, ex exercitationem expedita explicabo fuga mollitia nam porro quam quo rerum sapiente similique sint totam ullam vero. Ad atque, commodi debitis dolorum est id iusto, nam nemo optio possimus reiciendis sed, sint tenetur. Ad adipisci beatae dicta esse eum hic illo necessitatibus placeat recusandae rem. Debitis deserunt dolore ducimus earum eveniet laborum nulla pariatur rerum!'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
