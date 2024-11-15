<template>
  <div>
    <form @submit.prevent="register">
      <div>
        <label for="phoneNumber">Phone Number</label>
        <input class="input" v-model="phoneNumber" type="text" id="phoneNumber" required />
      </div>
      <div>
        <label for="email">Email</label>
        <input class="input" v-model="email" type="email" id="email" required />
      </div>
      <div>
        <label for="fullname">Full Name</label>
        <input class="input" v-model="fullname" type="text" id="fullname" required />
      </div>
      <button class="btn" type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
const phoneNumber = ref('')
const email = ref('')
const fullname = ref('')

const router = useRouter()

const register = async () => {
  try {
    const response = await $fetch('/server/api/auth/register', {
      method: 'POST',
      body: { email: email.value, phoneNumber: phoneNumber.value, fullname: fullname.value }
    })
    console.log('Registration successful:', response.data)
    router.push('/login')
  } catch (error) {
    console.error('Registration error:', error.response?.data || error)
  }
}

</script>

<style></style>