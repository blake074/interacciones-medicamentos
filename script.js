// script.js
document.addEventListener('DOMContentLoaded', () => {
    const interactionsSelect = document.getElementById('interactions');
    const highCalculator = document.getElementById('high-calculator');
    const lowCalculator = document.getElementById('low-calculator');

    interactionsSelect.addEventListener('change', (event) => {
        const selectedValue = event.target.value;

        // Hide both calculators initially
        highCalculator.classList.add('hidden');
        lowCalculator.classList.add('hidden');

        // Show the selected calculator
        if (selectedValue === 'high-calculator') {
            highCalculator.classList.remove('hidden');
        } else if (selectedValue === 'low-calculator') {
            lowCalculator.classList.remove('hidden');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const medicamento0 = document.getElementById("medicamento-0-select-low");
    const medicamento1 = document.getElementById("medicamento-1-select-low");

    const optionsMap = {
        ketoconazol: ["Diltiazem"],
        diltiazem: ["Atorvastatina", "Rivaroxaban"],
        cisplatino: ["Atorvastatina", "Capecitabina"],
        levotiroxina: ["Sitagliptina"],
    };

    medicamento0.addEventListener("change", (event) => {
        const selectedValue = event.target.value;

        // Clear existing options in the second dropdown
        medicamento1.innerHTML = "";

        // Populate the second dropdown based on the selected value
        if (optionsMap[selectedValue]) {
            optionsMap[selectedValue].forEach((option) => {
                const optElement = document.createElement("option");
                optElement.value = option.toLowerCase();
                optElement.textContent = option;
                medicamento1.appendChild(optElement);
            });
        } else {
            // Default option if no match
            const defaultOption = document.createElement("option");
            defaultOption.value = "default";
            defaultOption.textContent = "Seleccione un medicamento";
            medicamento1.appendChild(defaultOption);
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Get references to the dropdowns and button for the high calculator
    const med0SelectHigh = document.getElementById("medicamento-0-select-high");
    const med1SelectHigh = document.getElementById("medicamento-1-select-high");
    const equalsButtonHigh = document.getElementById("equals-high");

    // Get references to the table cells
    const interactionData = document.getElementById("interaction-data");
    const risksData = document.getElementById("risks-data");
    const cautionsData = document.getElementById("cautions-data");
    const symptomsData = document.getElementById("symptoms-data");

    // Define possible results for the high interaction calculator
    const highCombinations = {
        "ketoconazol+atorvastatina": {
            interaction: "El ketoconazol puede aumentar significativamente los niveles de atorvastatina en sangre.",
            risks: "Daño hepático, rabdomiólisis (descomposición del tejido muscular, que puede causar daño renal y ser fatal).",
            precautions: "Ajuste de dosis o monitoreo frecuente. Considerar alternativas o suspender atorvastatina",
            symptoms: "Dolor muscular inexplicable, debilidad, fiebre, orina oscura, pérdida de apetito, fatiga, ictericia.",
        },
        "ketoconazol+rivaroxaban": {
            interaction: "El ketoconazol puede elevar los niveles sanguíneos de rivaroxabán.",
            risks: "Aumento del riesgo de complicaciones graves o potencialmente mortales de sangrado.",
            precautions: "Ajuste de dosis o monitoreo frecuente. Alternativas a considerar.",
            symptoms: "Sangrado o moretones inusuales, mareo, heces negras, tos o vómito con sangre, dolor de cabeza intenso, debilidad.",
        },
    };

    // Event listener for the equals button
    equalsButtonHigh.addEventListener("click", () => {
        // Get the selected medication combination
        const med0 = med0SelectHigh.value.toLowerCase();
        const med1 = med1SelectHigh.value.toLowerCase();
        const combinationKey = `${med0}+${med1}`;

        // Check if the combination exists in the data
        const result = highCombinations[combinationKey];
        if (result) {
            // Update the table with the combination data
            interactionData.textContent = result.interaction;
            risksData.textContent = result.risks;
            cautionsData.textContent = result.precautions;
            symptomsData.textContent = result.symptoms;
        } else {
            // If combination is not found, clear the table or provide feedback
            interactionData.textContent = "No data available";
            risksData.textContent = "-";
            cautionsData.textContent = "-";
            symptomsData.textContent = "-";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Get references to the dropdowns and button for the low calculator
    const med0SelectLow = document.getElementById("medicamento-0-select-low");
    const med1SelectLow = document.getElementById("medicamento-1-select-low");
    const equalsButtonLow = document.getElementById("equals-low");

    // Get references to the table cells (shared across calculators)
    const interactionData = document.getElementById("interaction-data");
    const risksData = document.getElementById("risks-data");
    const cautionsData = document.getElementById("cautions-data");
    const symptomsData = document.getElementById("symptoms-data");

    // Define possible results for the low interaction calculator
    const lowCombinations = {
        "ketoconazol+diltiazem": {
            interaction: "El ketoconazol puede aumentar los niveles de diltiazem.",
            risks: "Ritmo cardíaco irregular, retención de líquidos, insuficiencia cardíaca, presión arterial excesivamente baja.",
            precautions: "Ajuste de dosis o monitoreo frecuente. Evitar conducir hasta conocer los efectos. Precaución al levantarse de posiciones sentadas.",
            symptoms: "Mareo, desmayo, aumento de peso inexplicable, hinchazón en manos/tobillos, dolor en el pecho, dificultad para respirar.",
        },
        "diltiazem+atorvastatina": {
            interaction: "El diltiazem puede aumentar los niveles de atorvastatina en sangre.",
            risks: "Daño hepático, rabdomiólisis (puede causar daño renal y muerte).",
            precautions: "Ajuste de dosis o monitoreo frecuente.",
            symptoms: "Dolor, sensibilidad o debilidad muscular inexplicable, fiebre, orina oscura, fiebre, escalofríos, dolor/articulaciones, sangrado, sarpullido, ictericia.",
        },
        "diltiazem+rivaroxaban": {
            interaction: "En pacientes con enfermedad renal, esta combinación puede elevar los niveles de rivaroxabán.",
            risks: "Aumento del riesgo de efectos secundarios graves o potencialmente mortales de sangrado.",
            precautions: "Ajuste de dosis o monitoreo frecuente.",
            symptoms: "Sangrado o moretones inusuales, mareo, heces negras, tos o vómito con sangre, dolor de cabeza severo, debilidad.",
        },
        "cisplatino+atorvastatina": {
            interaction: "Uso conjunto puede aumentar el riesgo de daño en los nervios (neuropatía).",
            risks: "Neuropatía: debilidad, entumecimiento, dolor y ardor en manos, pies o extremidades.",
            precautions: "Ajuste de dosis o monitoreo frecuente para reducir riesgo de neuropatía.",
            symptoms: "Debilidad, entumecimiento, dolor, ardor o hormigueo en las extremidades.",
        },
        "cisplatino+capecitabina": {
            interaction: "El uso conjunto puede incrementar el riesgo de efectos secundarios en la médula ósea y el tracto gastrointestinal.",
            risks: "Náuseas, vómitos, diarrea, pérdida de apetito, llagas en la boca, dolor abdominal, deterioro de la función de la médula ósea (anemia, sangrado, infecciones).",
            precautions: "Ajuste de dosis o monitoreo frecuente.",
            symptoms: "Palidez, fatiga, mareos, moretones o sangrados, fiebre, dificultad para respirar, pérdida de peso, enrojecimiento, llagas en el cuerpo, ardor durante la micción.",
        },
        "levotiroxina+sitagliptina": {
            interaction: "La levotiroxina puede afectar el control de la glucosa en sangre y disminuir la eficacia de sitagliptina.",
            risks: "El control de la glucosa en sangre puede verse afectado, y la eficacia de medicamentos antidiabéticos puede disminuir.",
            precautions: "Monitoreo frecuente de los niveles de glucosa. Ajuste de dosis de medicamentos antidiabéticos.",
            symptoms: "Aumento o disminución significativa de los niveles de glucosa, fatiga excesiva.",
        },
    };

    // Event listener for the equals button
    equalsButtonLow.addEventListener("click", () => {
        // Get the selected medication combination
        const med0 = med0SelectLow.value.toLowerCase();
        const med1 = med1SelectLow.value.toLowerCase();
        const combinationKey = `${med0}+${med1}`;

        // Check if the combination exists in the low-calculator data
        const result = lowCombinations[combinationKey];
        if (result) {
            // Update the table with the combination data
            interactionData.textContent = result.interaction;
            risksData.textContent = result.risks;
            cautionsData.textContent = result.precautions;
            symptomsData.textContent = result.symptoms;
        } else {

            interactionData.textContent = "No data available";
            risksData.textContent = "-";
            cautionsData.textContent = "-";
            symptomsData.textContent = "-";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const popup = document.getElementById("popup-message");
    const closeButton = document.getElementById("close-popup");

    // Show the popup when the page loads
    popup.classList.remove("hidden");

    // Hide the popup when the close button is clicked
    closeButton.addEventListener("click", () => {
        popup.classList.add("hidden");
    });

    // Optional: Close the popup when clicking outside the content
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.add("hidden");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const userButton = document.getElementById("user-button");
    const popup = document.getElementById("popup-manual");
    const closeButton = document.getElementById("close-popup");

    // Show the popup when the button is clicked
    userButton.addEventListener("click", () => {
        console.log("Opening popup"); // Debugging log
        popup.classList.remove("hidden");
    });

    // Hide the popup when the close button is clicked
    closeButton.addEventListener("click", () => {
        console.log("Closing popup"); // Debugging log
        popup.classList.add("hidden");
    });

    // Optional: Close the popup when clicking outside the content
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            console.log("Closing popup by clicking outside"); // Debugging log
            popup.classList.add("hidden");
        }
    });
});



