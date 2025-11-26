import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importa ícones que você quer usar

//import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'

// importa o ícone desejado
import { faMedal, faPeopleArrows, faChildDress, faVolleyball, faWheelchairMove, faBriefcase } from '@fortawesome/free-solid-svg-icons'

import { faSquareLinkedin } from '@fortawesome/free-brands-svg-icons'


// Adiciona os ícones à biblioteca
library.add( faMedal, faPeopleArrows, faChildDress, faVolleyball, faWheelchairMove, faSquareLinkedin, faBriefcase )

export default FontAwesomeIcon

