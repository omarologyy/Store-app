function AboutPage() {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        Driven by Passion, Powered by
        <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
          Trust.
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        We believe choosing a car is more than just a purchase, it’s an
        experience. Our mission is to connect drivers with reliable vehicles by
        providing transparent details, expert insights, and easy comparisons.
        From the latest models to trusted classics, we’re here to help you make
        confident decisions every step of the way.
      </p>
    </section>
  );
}
export default AboutPage;
