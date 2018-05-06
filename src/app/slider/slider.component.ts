import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  bgStyle: string;
  constructor() { }

  ngOnInit() {
  }

  onSliderChange(e) {
    //var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    /*$(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #94A14E), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')'
                );*/
    let val = (parseInt(e.target.value) - parseInt(e.target.min)) / (parseInt(e.target.max) - parseInt(e.target.min));

    e.target.style.backgroundImage = e.target.style.backgroundImage = '-webkit-gradient(linear, left top, right top, color-stop('+val+', #F65550), color-stop('+val+', #C7D1D3))'
  }
}
