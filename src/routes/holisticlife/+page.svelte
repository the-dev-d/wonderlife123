<script lang="ts">
  import HoverBox from "../../components/HoverBox.svelte";
  import Banner from "../../components/Banner.svelte";
  import Navbar from "../../components/Navbar.svelte";
  import VideoTile from "../../components/VideoTile.svelte";
  import ContactForm from "../../components/ContactForm.svelte";
  import Footer from "../../components/Footer.svelte";
  import Icon from "../../components/Icon.svelte";

  const videos = [
    "rmPp_P_Gqhw",
    "rymjDBm_EQU",
    "P-jKtzUuVcM",
    "1YFR20MmvpM",
    "9pH9NI8Fubs",
  ];
</script>
<svelte:head>
  <link rel="icon" href="/ayur/ayur-life.webp" />
</svelte:head>
<div class="bg-amber-50">
  <main class="w-full h-[50vh] md:h-[90vh]">
    <Banner>
      <div class="flex w-full h-full" slot="background">
        <img
          class="object-cover object-center w-full h-full brightness-50"
          src="holistic/homeo-2.webp"
          alt=""
        />
        <!-- <img
          class="hidden object-cover w-1/3 h-full lg:block brightness-75"
          src="ayur/ayurmix.webp"
          alt=""
        /> -->
      </div>
      <div slot="foreground" class="grid content-center h-full px-6 md:w-1/2">
        <h3 class="text-3xl font-semibold text-white md:text-5xl">Holistic Life</h3>
        <h5 class="my-3 text-gray-200 md:text-lg">
          Harmony of Mind, Body, and Spirit: Embrace the Power of Holistic Life for True Wellness.
        </h5>
        <div class="grid gap-6 my-6 w-fit md:flex md:w-full">
          <button
            class="p-3 font-semibold text-white transition-all border-2 md:text-lg hover:text-holistic-primary hover:bg-amber-50 border-holistic-primary bg-holistic-primary"
            >Get Started</button
          >
          <button
            class="p-3 font-semibold text-white transition-all border-2 md:text-lg hover:text-holistic-primary backdrop-blur-sm border-holistic-primary"
            >Know More</button
          >
        </div>
      </div>
      <Navbar class="text-holistic-primary" slot="header" logo="ayur/ayur-life.webp" title="HOLISTIC LIFE">
        <ul
          slot="options"
          class="items-center justify-center hidden gap-5 font-semibold md:flex"
        >
          <!-- <li>Placeholder</li>
          <li>Placeholder</li>
          <li>Placeholder</li> -->
        </ul>
      </Navbar>
    </Banner>
  </main>

  <!-- description  -->
  <section class="container grid py-6 mx-auto my-10 place-items-center">
    <div class="w-full py-6 mx-auto lg:w-2/3">
      <h3 class="w-full mb-6 text-3xl font-semibold text-center">Holistic Life</h3>
      <p class="m-6 text-center font-bree">
        The integration of homeopathy within the Holistic Life branch of
         Wonder Life serves as a valuable component of the organization's 
         mission to provide comprehensive and personalized healthcare. 
         By incorporating the principles of homeopathy into integrated 
         treatments, Wonder Life aims to promote holistic 
        well-being and support individuals in their journey towards optimal health on all levels.
      </p>
    </div>
  </section>

  <!-- the hover tiles  -->
  <section class="container mx-auto my-10 mb-20">
    <h4
      class="mx-auto my-8 text-3xl font-semibold text-center border-b-2 w-fit border-holistic-primary text-holistic-primary"
    >
      The Wonder Life Family
    </h4>
    <div class="flex w-full gap-2 p-3 md:mx-auto md:w-2/3">
      <a class="w-full" href="ayurlife">
        <HoverBox
        image="wonder/ic1.webp"
        beforeText="1"
        afterText="Ayur Life"
        color="ayur-primary"
      />
      </a>
      <a class="w-full" href="naturelife">
        <HoverBox
        image="wonder/ic2.webp"
        beforeText="2"
        afterText="Nature Life"
        color="nature-primary"
      />
      </a>
      <a class="w-full" href="holisticlife">
        <HoverBox
        image="wonder/ic3.webp"
        beforeText="3"
        afterText="Holistic Life"
        color="holistic-primary"
      />
      </a>
    </div>
  </section>

  <section class="relative w-full">
    <Banner>
      <div class="w-full h-full bg-gray-900" slot="background">
        <img
          class="object-cover w-full h-full brightness-75"
          src="holistic/homeo-1.webp"
          alt=""
        />
      </div>
      <div
        slot="foreground"
        class="flex flex-col justify-center w-full h-full p-6 py-20 text-white"
      >
        <div class="container w-full mx-auto my-16 md:px-10">
          <h2 class="text-2xl font-semibold border-b-2 md:text-4xl">
            Why Holistic Life ?
          </h2>
          <div class="w-full mt-20 lg:w-1/2">
            <!-- <h3
              class="text-2xl font-semibold text-center lg:text-left lg:text-3xl"
            >
              Lorem ipsum dolor sit amet consectetur.
            </h3> -->
            <p class="mt-10 text-center lg:text-left">
              Holistic Life is an integral part of Wonder Life's integrated healthcare system, 
              offering a unique and powerful approach to well-being. It recognizes the interconnectedness of the mind, body, 
              and spirit, addressing all aspects of an individual's being. Holistic Life provides a comprehensive 
              approach to wellness, treating the root causes of illness and promoting balance. 
            </p>
            <p class="mt-1 text-center lg:text-left">
              With personalized treatment 
              plans that integrate modalities such as homeopathy, Ayurveda, and naturopathy, it empowers individuals to take a
              n active role in their own health. By fostering self-care, Holistic Life enhances quality of life, 
              promoting inner peace, balance, and a deeper sense of fulfillment on all levels of being.
            </p>
          </div>
        </div>
      </div>
    </Banner>
  </section>
  <!-- <section class="p-3 mx-auto my-14 lg:container">
    <div
      class="w-full px-6 py-6 border-2 rounded-md shadow-md bg-opacity-70 bg-holistic-primary"
    >
      <div class="flex items-end mb-6 text-3xl font-semibold text-left text-white border-b-2">
        <span>Discover</span>
        <span class="ml-auto text-base cursor-pointer group">
          More
          <i class="w-0 transition-all opacity-0 group-hover:w-5 fas fa-angle-double-right group-hover:opacity-100"></i>
        </span>
      </div>
      <VideoTile primaryVideo={videos[0]} videos={videos.slice(1, 5)} />
    </div>
  </section> -->
  <section class="container p-6 mx-auto my-10">
    <div class="w-full">
      <h3
        class="my-10 text-3xl font-bold border-b-2 border-holistic-primary text-holistic-primary"
      >
        Reach us
      </h3>
      <ContactForm primaryClass="holistic-primary">
        <span class="grid" slot="head">
          <h4 class="font-semibold text-holistic-primary">Connect with Us</h4>
          <p class="mt-2 text-sm text-ayur-text">Your Wellness Journey Begins Here. Reach out to Wonder Life Today!</p>
        </span>
        <div slot="body">
          <Icon color="holistic-primary"
            label="Saras Tower Thuppumpadi, Thalacode P.O, Mulanthuruthy Ernakulam, PIN-682314"
          >
            <i class="fa-solid fa-location-dot" />
          </Icon>
          <Icon color="holistic-primary" label="+91 9632038278, +91 9633136484">
            <i class="fa-solid fa-mobile-screen-button" />
          </Icon>
          <Icon color="holistic-primary" label="contact@wonderlife123.in">
            <i class="fa-solid fa-envelope" />
          </Icon>
        </div>
        <div slot="foot">
          <h3>Follow us</h3>
          <!-- <div class="flex">
            <Icon>
              <i class="fa-brands fa-facebook" />
            </Icon>
            <Icon>
              <i class="fa-brands fa-youtube" />
            </Icon>
            <Icon>
              <i class="fa-brands fa-instagram" />
            </Icon>
          </div> -->
        </div>
      </ContactForm>
    </div>
  </section>
  <section>
    <img class="object-cover w-2/3 mix-blend-multiply lg:w-1/3" src="holistic/decor.webp" alt="">
  </section>
  <section class="bg-orange-900">
    <Footer>
      <!-- bg-amber-950 -->
      <div class="grid w-full gap-20 mb-6 md:m-3 md:flex">
        <!-- <div class="w-full">
          <h3 class="my-6 text-2xl font-semibold">Ayur Life</h3>
          <p class="max-w-full">
            Lorem ipsum dolor sit amet, consecteturHome adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
            id interdum velit laoreet id. Scelerisque varius morbi enim nunc.
            Pellentesque diam volutpat commodo rhoncus aenean vel elit
            scelerisque mauris pellentesque pulvinar.
          </p>
        </div> -->
        <div class="w-full">
          <h3 class="my-6 text-2xl font-semibold">Quick Links</h3>
          <ul class="grid gap-3 list-none">
            <a href="/"><li >Home</li></a>
            <a href="/ayurlife"><li >Ayur Life</li></a>
            <!-- <li>placeholder</li>
            <li>placeholder</li>
            <li>placeholder</li> -->
          </ul>
        </div>
      </div>
    </Footer>
  </section>
</div>
