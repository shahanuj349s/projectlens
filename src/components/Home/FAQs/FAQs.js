import React from "react";
import "./FAQs.css";

function FAQs() {
  return (
    <div className="pb-5">
      <h1 className="faq-title pt-4 pb-3">FAQs</h1>
      <div
        class="accordion px-5 accordion-box-border border-none"
        id="accordionExample"
      >
        <div class="accordion-item accordion-box-border mb-3 border border-secondary">
          <h2 class="accordion-header">
            <button
              class="accordion-button shadow-none rounded-pill"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Why Good Vision is important?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Good vision is essential for daily activities such as driving,
              reading, and safely navigating the world. It improves learning,
              productivity, and overall quality of life by allowing us to fully
              participate in activities and interact with people. Maintaining
              healthy vision is critical for ensuring independence, safety, and
              well-being throughout life.
            </div>
          </div>
        </div>
        <div class="accordion-item accordion-box-border mb-3 border border-secondary">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed shadow-none rounded-pill"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What does Single Vision means?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Single-vision refers to a type of prescription lens that corrects
              vision for one specific distance, either for near vision (reading)
              or distance vision (seeing far away). Single-vision lenses have a
              single prescription power throughout the entire lens.
            </div>
          </div>
        </div>
        <div class="accordion-item accordion-box-border mb-3 border border-secondary">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed shadow-none rounded-pill"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How often should one get their vision checked in a year?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              It's usually advised that you have your vision evaluated by an eye
              care specialist once a year, though this might vary based on
              factors such as age, pre-existing eye diseases, and general
              health. Regular eye exams assist detect vision changes and make
              prompt prescription adjustments, improving long-term eye health
              and wellness.
            </div>
          </div>
        </div>
        <div class="accordion-item accordion-box-border mb-3 border border-secondary">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed shadow-none rounded-pill"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              How are blue rays detrimental to eye health?
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Blue rays can negatively impact eye health by contributing to
              digital eye strain, disrupting sleep patterns, and potentially
              increasing the risk of age-related macular degeneration.
              Protecting the eyes from prolonged exposure to blue light is
              crucial for maintaining optimal vision and overall eye health.
            </div>
          </div>
        </div>
        <div class="accordion-item accordion-box-border mb-3 border border-secondary">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed shadow-none rounded-pill"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              What is the best way to clean my glasses?
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              To clean your glasses effectively, start by using a clean
              microfiber cloth to wipe them. If necessary, rinse them with
              lukewarm water and a small amount of mild dish soap, then dry
              gently with the cloth. Finally, store your glasses in a clean case
              to keep them protected when not in use.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
