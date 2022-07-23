import { Button } from './button.model';
import { Data } from './data.model';
import { Networks } from './networks.model';
import { Publication } from './publication.model';
import { Service } from './service.model';
import { Slider } from './slider.model';
import { Testimonial } from './testimonial.model';
import { Title } from './title.model';

export interface InfoDto {
  data: Data | null;
  networks: Networks;
  sliders: Slider[];
  buttons: Button[];
  services: Service[];
  publications: Publication[];
  testimonials: Testimonial[];
  title: Title | null;
}
