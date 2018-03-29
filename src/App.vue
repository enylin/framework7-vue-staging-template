<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left cover>
      <f7-view url="/panel-left"></f7-view>
    </f7-panel>

    <!-- Right Panel -->
    <f7-panel right cover>
      <f7-view url="/panel-right"></f7-view>
    </f7-panel>

    <!-- Main View -->
    <f7-view
      id="main-view"
      url="/"
      main
      :stackPages="true"
      :pushState="true"
      :pushStateRoot="pushStateRoot"
      pushStateSeparator="">
    </f7-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      pushStateRoot: process.env.URLS.BASE_URL
    }
  }
}
</script>
