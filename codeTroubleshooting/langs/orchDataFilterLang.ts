/**
 * JS-多语言
 * @author baitao.huang@hand-china.com
 * @date 2021-6-28·
 * @version: 0.0.1
 * @copyright: Copyright (c) 2021, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.orchestration',
  HEADER: () => intl.get('horc.orchestration.model.dataFilter.header').d('数据过滤'),
  ROOT: () => intl.get('horc.orchestration.model.dataFilter.root').d('字段路径'),
  ROOT_TIP: () =>
    intl
      .get('horc.orchestration.model.dataFilter.rootTip')
      .d('支持JSONPath,该路径对应的内容必须为数组或对象'),
  FILTER_CONDITION: () =>
    intl.get('horc.orchestration.model.dataFilter.filterCondition').d('过滤条件'),
  FILTER_CONDITION_TIP: () =>
    intl
      .get('horc.orchestration.model.dataFilter.filterConditionTip')
      .d(
        '配置数组当中的对象的key以及需要其值满足的条件，key可以选择对象属性或者如["a", "b"]这样的数组或对象数组中对象的属性，若选择的是数组，则根据条件分组及与或条件来判断选中的数组中每一个值或数组中对象中的某一个值来比较，条件分组为与则必须全部满足，为或则部分满足'
      ),
};

export default Langs;
