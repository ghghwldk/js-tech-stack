// named export 기본 형식
export {모듈명1, 모듈명2}
import {모듈명1, 모듈명2} from 'js 파일 경로'

export default 모듈명;
import 모듈명 from 'js 파일 경로'

import {named1, named2} from './example.js'
import {named1 as myExport, named2} from './example.js'

import * as Hello from './example.js'
import default1 from './example.js'
