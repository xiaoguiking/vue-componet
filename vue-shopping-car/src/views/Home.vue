<template>
  <div class="container">
    <mi-header :cartIconShow="true">小米手机</mi-header>
    <phone-list></phone-list>
  </div>
</template>

<script>
// @ is an alias to /src
import MiHeader from "../components/Header";
import PhoneList from "@/components/PhoneList";
export default {
  name: "Home",
  components: {
    "mi-header": MiHeader,
    "phone-list": PhoneList
  },
  mounted() {
    // console.log(this.$store);
    console.log(this.$store.dispatch("setData"));
  }
};
</script>
