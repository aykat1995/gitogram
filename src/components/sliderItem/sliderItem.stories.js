import sliderItem from './sliderItem.vue'

export default {
  title: 'sliderItem',
  components: {
    sliderItem
  }
}

export const defaultView = () => ({
  components: { sliderItem },
  template: `
    <sliderItem><p><b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Ipsa dolores voluptates est incidunt sequi quis mollitia minus nostrum quaerat. Eos, facilis. Vitae accusantium est eligendi earum ad sit optio quos ullam odio reprehenderit! Deserunt praesentium, sequi laborum commodi, sed accusantium necessitatibus voluptate excepturi autem nihil quod nisi voluptatum.</p></hr> <p>Iste dignissimos perspiciatis ut, vero ipsam soluta deserunt consequuntur nisi amet dolore debitis fugiat, tempora exercitationem delectus accusamus nihil nam odit recusandae incidunt at? Maxime cupiditate expedita consectetur, et ipsum eum maiores esse ipsa molestias numquam ea iure eligendi magni sit voluptatem fugit dicta sunt illo ipsam odit? Cumque itaque sed minima illum perferendis. Vitae iusto impedit omnis magnam libero itaque illum sed alias recusandae, commodi tempore natus dolorum sunt voluptatum! </p> </hr><p>Libero esse repellat eveniet voluptatem iste aperiam tempore voluptas numquam voluptates unde harum culpa inventore reprehenderit, totam architecto sequi, temporibus quaerat ducimus mollitia neque natus.cimus enim magnam quisquam? Quae beatae expedita autem voluptatum sapiente laborum optio error illum facilis? Harum assumenda nobis doloribus.</p></sliderItem>
  `
})
