<template>
  <div>
    <div class="primary pa-4 text-center white--text" style="border-radius: 4px; font-size: 13px;">केन्द्रिय कार्यालयका विज्ञापन देखि सिफारिससम्मका सूचनाहरू</div>
    <div class="notice__filters my-3 d-flex flex-wrap" style="gap: 6px;">
      <v-btn rounded v-for="(a ,i) in notice_filters" :key="i" class="elevation-0" :class="{ 'primary white--text': active_notice === a }" @click="() => active_notice = a">{{ a }}</v-btn>
    </div>
    <table>
      <thead>
        <tr>
          <th>बिज्ञापन नं.</th>
          <th>विवरण</th>
          <th>पद संख्या</th>
          <th>अन्तिम मिति</th>
          <th>दोब्बर दस्तुर मिति</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in count" :key="a">
          <td>{{ a }}.</td>
          <td style="text-align: start;">शाखा अधिकृत वा सो सरह, न्याय, न्याय, रा.प. तृतीय पदको जेष्ठता र कार्यसम्पादन मूल्याङ्कनद्वारा हुने बढुवा</td>
          <td>2</td>
          <td>2078-10-04</td>
          <td>2078-10-20</td>
        </tr>
      </tbody>
    </table>
  </div>  
</template>

<script>
export default {
  props: {
    count: Number,
  },
  data: () => ({
    notice_filters: ['विज्ञापन', 'स्वीकृत नामावली', 'परीक्षा केन्द्र', 'लिखित नतिजा', 'सिफारिस'],
    active_notice: 'विज्ञापन',
  })
}
</script>