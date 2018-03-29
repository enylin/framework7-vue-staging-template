<template>
  <f7-page>
    <f7-navbar title="Not found"></f7-navbar>
    <f7-block strong>
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </f7-block>
    <ul>
      <li><b>Url:</b> {{$f7route.url}}</li>
      <li><b>Path:</b> {{$f7route.path}}</li>
      <li><b>Hash:</b> {{$f7route.hash}}</li>
      <li><b>Params:</b>
        <ul>
          <li v-for="(value, key) in $f7route.params" :key="key"><b>{{key}}:</b> {{value}}</li>
        </ul>
      </li>
      <li><b>Query:</b>
        <ul>
          <li v-for="(value, key) in $f7route.query" :key="key"><b>{{key}}:</b> {{value}}</li>
        </ul>
      </li>
      <li><b>Route:</b> {{$f7route.route}}</li>
    </ul>
  </f7-page>
</template>
<script>
export default {}
</script>
