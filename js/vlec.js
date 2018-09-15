// //Combine with the main script
$(document).ready(function(){
  $("#vlec_parent").mouseup(function(e)
  {
      var subject = $("#vlec_child");
      if(e.target.id != subject.attr('id') && !subject.has(e.target).length)
      {
          $(".vlec__child").css('display','none');
          $(".vlec__parent").css('display','none');

      }
  });
    function getModal(key) {
      console.log(1527);
      $(".vlec__parent").css('display','block');
      $(".vlec__child").css('display','block');
      $('#vlec_parent').fadeIn();
      var embedFrame = document.getElementById('frame')
      embedFrame.setAttribute('src', key);
    }

    var subjects = new Map();
        subjects.set('AppChem' , 'Applied Chemistry');
        subjects.set('AppPhy' , 'Applied Physics');
        subjects.set('Maths1' , 'Mathematics 1 ');
        subjects.set('Maths2' , 'Mathematics 2 ');
        subjects.set('BioChem' , 'BioChemistry');
        subjects.set('BioTech' , 'Introduction to BioTechnology');
        subjects.set('CellBio' , 'Cell Biology and Genetics');
        subjects.set('ProfComm' , 'Professional Communication');
        subjects.set('CompOne' , 'Computer Programming 1');
        subjects.set('CompTwo' , 'Computer Programming 2');
        subjects.set('DevBio' , 'Development Biology');
        subjects.set('EngDraw' , 'Engineering Drawing');
        subjects.set('EngDes' , 'Engineering Design');
        subjects.set('EleEng' , 'Electrical');
        subjects.set('EceEng' , 'Electronics');
        subjects.set('IntroBio' , 'Introduction to BioTechnology');
        subjects.set('MicroBio' , 'MicroBiology');
        subjects.set('Env' , 'Environmental Engineering');
        subjects.set('IntroMaths1' , 'Introductory Mathematics 1');
        subjects.set('IntroMaths2' , 'Introductory Mathematics 2');
        subjects.set('Mech' , 'Mechanics');


    var subjectThemes = new Map()
        subjectThemes.set('AppChem' , '#4F84C4');
        subjectThemes.set('AppPhy' , '#79C753');
        subjectThemes.set('Maths1' , '#E94B3C');
        subjectThemes.set('Maths2' , '#6F9FD8');
        subjectThemes.set('BioChem' , '#6B5B95');
        subjectThemes.set('BioTech' , '#bc243c');
        subjectThemes.set('CellBio' , '#ed9302');
        subjectThemes.set('ProfComm' , '#bc243c');
        subjectThemes.set('CompOne' , '#005960');
        subjectThemes.set('CompTwo' , '#D2691E');
        subjectThemes.set('DevBio' , '#4F84C4');
        subjectThemes.set('EngDraw' , '#2E4A62');
        subjectThemes.set('EngDes' , '#4f1a5f');
        subjectThemes.set('EleEng' , '#944743');
        subjectThemes.set('EceEng' , '#c47fad');
        subjectThemes.set('Env' , '#6B5B95');
        subjectThemes.set('IntroBio' , '#4f1a5f');
        subjectThemes.set('MicroBio' , ' #944743');
        subjectThemes.set('IntroMaths1' , '#c47fad');
        subjectThemes.set('IntroMaths2' , '#E94B3C');
        subjectThemes.set('Mech' , '#ed9302');

    var subjectAlias = new Map();
    //Chemistry
        //Fuels
        subjectAlias.set('Fuels -1 Introduction, Classification, Calorific Value','Introduction, Classification', 'Calorific Value');
        subjectAlias.set('Fuels -2 Higher or Gross(HCV)(GCV) and Lower or Net Calorific Value(LCV)(NCV) of Coal', 'Lower, Higher, Gross and Net Calorific Value');
        subjectAlias.set('Fuels -3 Characteristics of a Good Fuel and Discussion on Coal', 'Categorisation of a Good Fuel');
        subjectAlias.set('Fuels -4 Proximate Analysis', 'Proximate Analysis');
        subjectAlias.set('Fuels -5 Ultimate Analysis', 'Ultimate Analysis');
        subjectAlias.set('Fuels -6 Carbonization of Coal', 'Carbonization of Coal');
        subjectAlias.set('Fuels -7 Refining of Petroleum', 'Refining of Petroleum');
        subjectAlias.set('Fuels -8 Refining of Petroleum - Fractional Distillation parts', 'Fractional Distillation');
        subjectAlias.set('Fuels -9 Knocking, Octane Number, Cetane Number', 'Knocking, Octane Number, Cetane Number');
        subjectAlias.set('Power Alcohol', 'Power Alcohol');
        //Atomic Structure
        subjectAlias.set('Elements, Compounds and Mixtures','Elements, Compounds and Mixtures');
        subjectAlias.set('Class 10 Science - Chemistry - Physical & Chemical Changes','Physical & Chemical Changes');
        subjectAlias.set(
          "What is a Limit? Basic Idea of Limits",
          "Basic Ideas of Limits"
        );
        subjectAlias.set(
          "❖ Finding Local Maximums/Minimums - Second Derivative Test ❖",
          "Finding Local Maximums/Minimums"
        );
        subjectAlias.set(
          "❖ Concavity, Inflection Points and Second Derivatives ❖",
          "Concavity, Inflection Points and Second Derivatives"
        );
        //Multiple Integrals
        subjectAlias.set(
          "Double Integrals - Changing Order of Integration - Full Ex.",
          "Changing Order of Integration"
        );
        subjectAlias.set(
          "Change of Variables in Multiple Integrals - A Double Integral Example, Part 1 of 2",
          "Change of Variables in Multiple Integrals - Part 1"
        );
        subjectAlias.set(
          "Change of Variables in Multiple Integrals - A Double Integral Example, Part 2 of 2",
          "Change of Variables in Multiple Integrals - Part 2"
        );
        subjectAlias.set(
          "Double Integral Using Polar Coordinates - Part 1 of 3",
          "Double Integral Using Polar Coordinates - Part 1"
        );
        subjectAlias.set(
          "Double Integral Using Polar Coordinates - Part 2 of 3",
          "Double Integral Using Polar Coordinates - Part 2"
        );
        subjectAlias.set(
          "Double Integral Using Polar Coordinates - Part 3 of 3",
          "Double Integral Using Polar Coordinates - Part 3"
        );
        //Applications Of Derivatives
        subjectAlias.set(
          "Mean value theorem | Derivative applications | Differential Calculus | Khan Academy",
          "Mean Value Theorem"
        );
        subjectAlias.set(
          "Graphing using derivatives | Derivative applications | Differential Calculus | Khan Academy",
          "Graphing Using Derivatives"
        );
        subjectAlias.set(
          "Another example graphing with derivatives | Differential Calculus | Khan Academy",
          "Another Example Graphing with Derivatives"
        );
        subjectAlias.set(
          "Finding horizontal and vertical asymptotes | Rational expressions | Algebra II | Khan Academy",
          "Horizontal and Vertical Asymptotes"
        );
        subjectAlias.set(
          "Finding All Asymptotes of a Rational Function (Vertical, Horizontal, Oblique / Slant)",
          "Vertical, Horizontal, Oblique/Slant Asymptotes"
        );
        subjectAlias.set(
          "Increasing/Decreasing + Local Max and Mins using First Derivative Test",
          "Local Max and Mins using First Derivative Test"
        );
        subjectAlias.set(
          "Analyzing a function with its derivative | AP Calculus AB | Khan Academy",
          "Analyzing a Function with its Derivative"
        );
        subjectAlias.set(
          "Concavity introduction | Using derivatives to analyze functions | AP Calculus AB | Khan Academy",
          "Concavity Introduction"
        );
        subjectAlias.set(
          "Analyzing concavity (algebraic) | AP Calculus AB | Khan Academy",
          "Analyzing Concavity"
        );
        subjectAlias.set(
          "Second derivative test | Using derivatives to analyze functions | AP Calculus AB | Khan Academy",
          "Second Derivative Test"
        );
        //Sequence & Series
        subjectAlias.set(
          "What is a Sequence? Basic Sequence Info",
          "Sequence Introduction"
        );
        subjectAlias.set(
          "Sequences - Examples showing convergence or divergence",
          "Sequences - Convergence or Divergence"
        );
        subjectAlias.set(
          "Limit Comparison Test and Direct Comparison Test",
          "Limit and Direct Comparison Test"
        );
        subjectAlias.set(
          "Using the Ratio Test to Determine if a Series Converges #1",
          "Ratio Test - Part 1"
        );
        subjectAlias.set(
          "Using the Ratio Test to Determine if a Series Converges #2",
          "Ratio Test - Part 2"
        );
        subjectAlias.set(
          "Using the Ratio Test to Determine if a Series Converges #3",
          "Ratio Test - Part 3"
        );
        subjectAlias.set(
          "Strategy for Testing Series - Series Practice Problems",
          "Strategy for Testing Series"
        );
        subjectAlias.set(
          "Absolute Convergence, Conditional Convergence and Divergence",
          "Absolute and Conditional Convergence and Divergence"
        );
        subjectAlias.set(
          "Absolute Convergence, Conditional Convergence, Another Example 1",
          "Absolute and Conditional Convergence, Ex 1"
        );
        subjectAlias.set(
          "Absolute Convergence, Conditional Convergence, Another Example 2",
          "Absolute and Conditional Convergence, Ex 2"
        );
        subjectAlias.set(
          "Absolute Convergence, Conditional Convergence, Another Example 3",
          "Absolute and Conditional Convergence, Ex 3"
        );
        //Series Expansion
        subjectAlias.set(
          "❖ Taylor and Maclaurin Series - Example 1 ❖",
          "Taylor and Maclaurin Series - Ex 1"
        );
        subjectAlias.set(
          "Taylor and Maclaurin Series - Example 2",
          "Taylor and Maclaurin Series - Ex 2"
        );
        subjectAlias.set(
          "Taylor's Remainder Theorem - Finding the Remainder, Ex 1",
          "Taylor's Remainder Theorem - Ex 1"
        );
        subjectAlias.set(
          "Taylor's Remainder Theorem - Finding the Remainder, Ex 2",
          "Taylor's Remainder Theorem - Ex 2"
        );
        subjectAlias.set(
          "Taylor's Remainder Theorem - Finding the Remainder, Ex 3",
          "Taylor's Remainder Theorem - Ex 3"
        );
        subjectAlias.set(
          "Taylor's Remainder Theorem - Finding the Remainder, Ex 4",
          "Taylor's Remainder Theorem - Ex 4"
        );
        subjectAlias.set(
          "Finding a Taylor Polynomial to Approximate a Function, Ex 1",
          "Taylor Polynomial to Approximation - Ex 1"
        );
        subjectAlias.set(
          "Finding a Taylor Polynomial to Approximate a Function, Ex 2",
          "Taylor Polynomial to Approximation - Ex 2"
        );
        subjectAlias.set(
          "Taylor Polynomial to Approximate a Function, Ex 3",
          "Taylor Polynomial to Approximation - Ex 3"
        );
        subjectAlias.set(
          "Finding a Taylor Polynomial to Approximate a Function, Ex 4",
          "Taylor Polynomial to Approximation - Ex 4"
        );
        
        //Mathematics 2
        //Linear Algebra
        subjectAlias.set(
          "Matrices: Reduced row echelon form 1 | Vectors and spaces | Liear Algebra | Khan Academy",
          "Matrices: Reduced Row Echelon Form - Part 1"
        );
        subjectAlias.set(
          "Matrices: Reduced row echelon form 2 | Vectors and spaces | Liear Algebra | Khan Academy",
          "Matrices: Reduced Row Echelon Form - Part 2"
        );
        subjectAlias.set(
          "Cramer's Rule to Solve a System of 3 Linear Equations - Example 1",
          "Cramer's Rule - Example 1"
        );
        subjectAlias.set(
          "Cramer's Rule to Solve a System of 3 Linear Equations - Example 2",
          "Cramer's Rule - Example 2"
        );
        subjectAlias.set(
          "Finding the Inverse of a 3 x 3 Matrix using Determinants and Cofactors - Example 1",
          "Inverse of a 3 x 3 Matrix - Example 1"
        );
        subjectAlias.set(
          "Finding the Inverse of a 3 x 3 Matrix using Determinants and Cofactors - Example 2",
          "Inverse of a 3 x 3 Matrix - Example 2"
        );
        subjectAlias.set(
          "Finding the Inverse of a 3 x 3 Matrix using Determinants and Cofactors - Example 3",
          "Inverse of a 3 x 3 Matrix - Example 3"
        );
        subjectAlias.set(
          "Linear subspaces | Vectors and spaces | Linear Algebra | Khan Academy",
          "Linear Subspaces"
        );
        subjectAlias.set(
          "Introduction to Eigenvalues and Eigenvectors - Part 1",
          "Eigenvalues and Eigenvectors - Part 1"
        );
        subjectAlias.set(
          "❖ Finding Eigenvalues and Eigenvectors : 2 x 2 Matrix Example ❖",
          "Eigenvalues and Eigenvectors - Part 2"
        );
        subjectAlias.set(
          "The Gram-Schmidt process | Alternate coordinate systems (bases) | Linear Algebra | Khan Academy",
          "The Gram-Schmidt Process"
        );
        
        //Ordinary Differential Equations
        subjectAlias.set(
          "❖ First Order Linear Differential Equations ❖",
          "First Order Linear Differential Equations"
        );
        subjectAlias.set(
          "2nd order linear homogeneous differential equations 1 | Khan Academy",
          "2nd Order Linear Homogeneous Differential Equations - Part 1"
        );
        subjectAlias.set(
          "2nd order linear homogeneous differential equations 2 | Khan Academy",
          "2nd Order Linear Homogeneous Differential Equations - Part 2"
        );
        subjectAlias.set(
          "2nd order linear homogeneous differential equations 3 | Khan Academy",
          "2nd Order Linear Homogeneous Differential Equations - Part 3"
        );
        subjectAlias.set(
          "2nd order linear homogeneous differential equations 4 | Khan Academy",
          "2nd Order Linear Homogeneous Differential Equations - Part 4"
        );
        subjectAlias.set(
          "One Integral known method in Hindi",
          "One Solution known method"
        );
        subjectAlias.set(
          "Cauchy-Euler Differential Equations (2nd Order)",
          "Cauchy-Euler Differential Equations"
        );
        subjectAlias.set(
          "Method of Undetermined Coefficients/ 2nd Order Linear DE",
          "Method of Undetermined Coefficients"
        );
        subjectAlias.set(
          "Variation of Parameters to Solve a Differential Equation (Second Order)",
          "Variation of Parameters Method"
        );
        
        //Ordinary Differential Equations
        subjectAlias.set(
          "Formula for Half Range Sine and Cosine Series - Fourier Series - Engineering Mathematics 3",
          "Formula for Half Range Sine and Cosine Series"
        );
        subjectAlias.set(
          "Half range Cosine Series for F(x) = x in (0,2) - Fourier Series - Engineering Mathematics 3",
          "Half range Cosine Series for F(x) = x in (0,2)"
        );
        
        //Laplace Transform
        subjectAlias.set(
          "The Laplace Transform - The Basic Idea of How We Use It",
          "Introduction to Laplace Transform"
        );
        subjectAlias.set(
          "The Inverse Laplace Transform - Example and Important Theorem",
          "The Inverse Laplace Transform"
        );
        subjectAlias.set(
          "Calculating the Laplace Transform of a Function Using Tables",
          "Laplace Transform of a Function Using Tables"
        );
        subjectAlias.set(
          "Laplace transform of the unit step function | Laplace transform | Khan Academy",
          "Unit Step Function"
        );
        subjectAlias.set(
          "Inverse Laplace examples | Laplace transform | Differential Equations | Khan Academy",
          "Inverse Laplace"
        );
        subjectAlias.set(
          "Laplace transform of impulse function",
          "Laplace transform of Impulse Function"
        );
        
        //Applied Physics
        //Quantum Physics
        subjectAlias.set(
          "quantum mechanics | part-1 | Engineering physics | sem 1 | by dr.prakash bhadane",
          "Quantum Mechanics"
        );
        subjectAlias.set("Schrodinger wave equation", "Schrodinger Wave Equation");
        subjectAlias.set(
          "6. Expectation value in quantum mechanics",
          "Expectation Value : Quantum Mechanics"
        );
        subjectAlias.set(
          "Quantum Mechanics Lecture-3: Part-I: Physically acceptable wave function& Expectation value",
          "Physically Acceptable Wave Function"
        );
        
        //LASER
        subjectAlias.set(
          "Laser -1 Introduction,Properties,Absorption,Spontaneous Emission,Stimulated Emission",
          "LASER : Introduction"
        );
        subjectAlias.set(
          "Ruby laser working and construction",
          "Ruby Laser Working and Construction"
        );
        subjectAlias.set(
          "6. Expectation value in quantum mechanics",
          "Expectation Value : Quantum Mechanics"
        );
        
        //Polarisation
        subjectAlias.set(
          "Polarization of light, linear and circular | Light waves | Physics | Khan Academy",
          "Polarisation : Introduction"
        );
        subjectAlias.set(
          "16 - Class 12 - Physics - Wave Optics - Polarisation",
          "Wave Optics - Polarisation"
        );
        subjectAlias.set(
          "Production of Plane Polarised Light : Production By Reflection (Brewster Law)",
          "Brewster Law"
        );
        subjectAlias.set(
          "PolarizationLinear, Elliptical and Circular",
          "Polarization : Linear, Elliptical and Circular"
        );
        
        subjectAlias.set(
          "Production and Detection of Plane Polarized Light in Urdu Sabaq Foundation",
          "Production and Detection of Plane Polarized Light"
        );
        subjectAlias.set("8 Uses of Polarisation", "Uses of Polarisation");
        
        //Diffraction
        subjectAlias.set(
          "Single slit interference | Light waves | Physics | Khan Academy",
          "Single Slit Interference "
        );
        subjectAlias.set(
          "Young's double slit introduction | Light waves | Physics | Khan Academy",
          "Young's Double Slit Introduction "
        );
        subjectAlias.set(
          "Young's double slit equation | Light waves | Physics | Khan Academy",
          "Young's Double Slit Equation"
        );
        subjectAlias.set(
          "Young's double slit problem solving | Mechanical waves and sound | Physics | Khan Academy",
          "Young's Double Slit Problem Solving"
        );
        subjectAlias.set(
          "Diffraction grating | Light waves | Physics | Khan Academy",
          "Diffraction Grating"
        );
        
        //Interference
        subjectAlias.set(
          "Interference produced by wedge shaped film(by division of amplitude)",
          "Interference Produced by Wedge Shaped Film"
        );
        subjectAlias.set(
          "Thin Film Interference part 1 | Light waves | Physics | Khan Academy",
          "Thin Film Interference - Part 1 "
        );
        subjectAlias.set(
          "Thin Film Interference part 2 | Light waves | Physics | Khan Academy",
          "Thin Film Interference - Part 2"
        );
        subjectAlias.set(
          "Part 5- Wedge shape film for reflected and transmited system in hindi/urdu Optics Interference",
          "Wedge Shape Film for reflected and transmited system"
        );
        subjectAlias.set("WEDGE SHAPE FILM", "Wedge Shape Film");
        subjectAlias.set(
          "newton rings - interference complete tutorial",
          "Newton Rings"
        );
        subjectAlias.set(
          "First Year Physics Newton's Ring - Physics Chapter 9 Physical Optics- FSC Part 1",
          "Newton Rings (Hindi)"
        );
        
        //Oscillatory Motionh & Waves
        subjectAlias.set(
          "Simple Harmonic Motion: Crash Course Physics #16",
          "Simple Harmonic Motion : Introduction"
        );
        subjectAlias.set(
          "Simple Harmonic Motion, Mass Spring System - Amplitude, Frequency, Velocity - Physics Problems",
          "Mass Spring System"
        );
        
        //EM Waves
        subjectAlias.set(
          "Electromagnetic waves and the electromagnetic spectrum | Physics | Khan Academy",
          "Electromagnetic Waves : Introduction"
        );
        subjectAlias.set(
          "USES OF ELECTROMAGNETIC WAVES",
          "Use Of Electromagnetic Waves"
        );
        subjectAlias.set(
          "Gradient, Divergence And Curl | Calculus | Chegg Tutors",
          "Gradient, Divergence And Curl"
        );
        subjectAlias.set(
          "Divergence and Curl of a vector point function in Hindi",
          "Gradient, Divergence And Curl (Hindi)"
        );
        subjectAlias.set(
          "Scalar field and Vector field | Physics video in HINDI | EduPoint",
          "Scalar Field and Vector Field  (Hindi)"
        );
        subjectAlias.set(
          "Green's and Stokes' theorem relationship | Multivariable Calculus | Khan Academy",
          "Green's and Stokes' Theorem Relationship"
        );
        subjectAlias.set(
          "Green's Theorem, Divergence Theorem, Stokes Theorem Engineering Math 31 for gate in hindi",
          "Green's and Stokes' Theorem Relationship (Hindi)"
        );
        subjectAlias.set(
          "Displacement Current - Electromagnetic Waves for IIT Class 12 XII | Physics Video Lecture in Hindi",
          "Displacement Current (Hindi)"
        );
        subjectAlias.set(
          "Unit 1 Maxwell Equation , Poynting Theorem",
          "Maxwell Equation, Poynting Theorem"
        );
        
        subjectAlias.set(
          "Electromagnetic Wave Equation in Free Space, Electromagnetic Waves in Free Space",
          "Electromagnetic Wave Equation in Free Space"
        );
        subjectAlias.set(
          "Electromagnetic Waves in a Conducting Medium, Propagation of EM Waves in Conducting Medium",
          "Electromagnetic Waves in a Conducting Medium"
        );
        //Ultrasonics
        subjectAlias.set(
          "Ultrasonic Waves - Definition - Motion - Applied Physics - MSBTE | Ekeeda.com",
          "Ultrasonic Waves - Definition"
        );
        subjectAlias.set(
          "What is Ultrasonic and list of important question for exam| First year Engineering physics videos",
          "Important Question for Exam"
        );
        subjectAlias.set(
          "what is Magnetostriction effect and how it works in hindi | Ultrasonic part 2 | first year videos",
          "Magnetostriction Effect (Hindi)"
        );
        subjectAlias.set(
          "What is Piezoelectric Oscillator in hindi | ultrasonic part 5",
          "Piezoelectric Oscillator (Hindi)"
        );
        subjectAlias.set(
          "soft magnet material vs hard magnet material in hindi | first year physics series",
          "Magnet Material (Hindi)"
        );
        subjectAlias.set(
          "what is Piezoelectric effect and how it works in hindi | Ultrasonic part 3 | first year videos",
          "Piezoelectric Effect (Hindi)"
        );
        subjectAlias.set(
          "What is Magnetostriction Oscillator in hindi | ultrasonic part 4",
          "Magnetostriction Effect (Hindi)"
        );
        subjectAlias.set(
          "Hysterisis curve and Loss in hindi | first year physics videos",
          "Hysterisis Curve (Hindi)"
        );
        subjectAlias.set(
          "Ultrasound medical imaging | Mechanical waves and sound | Physics | Khan Academy",
          "Ultrasound Medical Imaging"
        );
        //Acoustics
        subjectAlias.set(
          "What is Acoustics part 1 in Hindi| First year engineering physics series",
          "Acoustics (Hindi) - Part 1"
        );
        
        subjectAlias.set(
          "First year engineering physics videos (Acoustics Basics ) part 2 in Hindi",
          "Acoustics (Hindi) - Part 2"
        );
        subjectAlias.set(
          "First year engineering physics videos (Acoustics Basics ) part 3 in Hindi",
          "Acoustics (Hindi) - Part 3"
        );
        subjectAlias.set(
          "AP1_4.1: Reverberation Time and Sabine's Formula",
          "Reverberation Time and Sabine's Formula"
        );
        subjectAlias.set(
          "Understand the acoustics of buildings",
          "Acoustics of Buildings"
        );
        subjectAlias.set(
          "Method to design good Acoustics in hindi | Physics videos | First year engineering",
          "Acoustics of Buildings (Hindi)"
        );
        subjectAlias.set(
          "What is Magnetostriction Oscillator in hindi | ultrasonic part 4",
          "Magnetostriction Effect (Hindi)"
        );
        
        //Applied Chemistry
        //Atomic Structure
        subjectAlias.set(
          "Orbitals, the Basics: Atomic Orbital Tutorial — probability, shapes, energy; Crash Chemistry Academy",
          "Orbitals, the Basics"
        );
        subjectAlias.set(
          "Aufbau's Principle, Hund's Rule & Pauli's Exclusion | Electronic Configuration - Ashwin Sir",
          "Aufbau's Principle, Hund's Rule & Pauli's Exclusion"
        );
        subjectAlias.set(
          "Ultrasound medical imaging | Mechanical waves and sound | Physics | Khan Academy",
          "Ultrasound Medical Imaging"
        );
        subjectAlias.set(
          "Lecture: Chemical Bonding and Molecular Structure - 1",
          "Chemical Bonding and Molecular Structure"
        );
        subjectAlias.set(
          "Atomic Hook-Ups - Types of Chemical Bonds: Crash Course Chemistry #22",
          "Types of Chemical Bonds"
        );
        //Equilibrium
        subjectAlias.set(
          "Le Chatelier's principle | Chemical equilibrium | Chemistry | Khan Academy",
          "Le Chatelier's principle"
        );
        subjectAlias.set(
          "Introduction to buffers | Water, acids, and bases | Biology | Khan Academy",
          "Introduction to Buffers"
        );
        subjectAlias.set(
          "Common ion effect and buffers | Chemistry | Khan Academy",
          "Common Ion Effect and Buffers "
        );
        subjectAlias.set(
          "Buffer solution pH calculations | Chemistry | Khan Academy",
          "Buffer Solution pH Calculations"
        );
        subjectAlias.set(
          "pH and pKa relationship for buffers | Chemistry | Khan Academy",
          "pH and pKa Relationship for Buffers"
        );
        subjectAlias.set(
          "Buffer capacity | Buffers, titrations, and solubility equilibria | Chemistry | Khan Academy",
          "Buffer Capacity "
        );
        subjectAlias.set(
          "Titration curves and acid-base indicators | Chemistry | Khan Academy",
          "Titration Curves "
        );
        subjectAlias.set(
          "Ionic Equilibrium I Introduction I Part 1",
          "Ionic Equilibrium : Introduction"
        );
        subjectAlias.set("Ionic Equilibrium Part 2 I Electrolytes", "Electrolytes");
        subjectAlias.set(
          "Ionic Equilibrium I Acid BaseTheories I Part 3",
          "Acid Base Theories"
        );
        subjectAlias.set("Ionic Equilibrium I Amphiprotic I Part 5", "Amphiprotic");
        subjectAlias.set(
          "IONIC EQUILIBRIUM I CONJUGATE ACID BASE PAIR I Part 4",
          "Conjugate Acid, Base Pairs"
        );
        subjectAlias.set("Ionic Equilibrium I Lewis Concept I Part 6", "Lewis Concept");
        subjectAlias.set(
          "Ionic Equilibrium I Factors Affecting Degree of Ionisation I Part 7",
          "Factors Affecting Degree of Ionisation"
        );
        subjectAlias.set(
          "Ionic Equilibrium I Ostwald Dilution Law I Part 8 I Hindi",
          "Ionic Equilibrium I Ostwald Dilution Law "
        );
        subjectAlias.set(
          "Common Ion Effect I Ionic Equilibrium Part 9 I HINDI",
          "Common Ion Effect"
        );
        subjectAlias.set(
          "Trick to Find PH of Mixture I Ionic Equilibrium",
          "Trick to Find PH of Mixture"
        );
        //Electrochemistry
        subjectAlias.set("Transport number electrochemistry", "Transport Number");
        subjectAlias.set("XII 3.2 Kohlrausch Law", "Kohlrausch Law");
        subjectAlias.set(
          "XII Chemistry - Electrochemistry - Specific, Equivalent and Molar Conductivity by Gourav Bura Sir",
          "Specific, Equivalent and Molar Conductivity"
        );
        subjectAlias.set(
          "Conductometric Titration of strong acid and base",
          "Conductometric Titration (SA/SB)"
        );
        
        //Fuels
        subjectAlias.set(
          "Fuels -1 Introduction, Classification, Calorific Value",
          "Introduction, Classification, Calorific Value"
        );
        subjectAlias.set(
          "Fuels -2 Higher or Gross(HCV)(GCV) and Lower or Net Calorific Value(LCV)(NCV) of Coal",
          "Gross(HCV)(GCV) and Net Calorific Value(LCV)(NCV) of Coal"
        );
        subjectAlias.set(
          "Fuels -3 Characteristics of a Good Fuel and Discussion on Coal",
          "Characteristics of a Good Fuel"
        );
        subjectAlias.set("Fuels -4 Proximate Analysis", "Proximate Analysis");
        subjectAlias.set("Fuels -5 Ultimate Analysis", "Ultimate Analysis");
        subjectAlias.set("Fuels -6 Carbonization of Coal", "Carbonization of Coal");
        subjectAlias.set("Fuels -7 Refining of Petroleum", "Refining of Petroleum");
        subjectAlias.set(
          "Fuels -8 Refining of Petroleum - Fractional Distillation parts",
          "Refining of Petroleum - Fractional Distillation"
        );
        subjectAlias.set(
          "Fuels -9 Knocking, Octane Number, Cetane Number",
          "Knocking, Octane Number, Cetane Number"
        );
        
        //Spectroscopy
        subjectAlias.set(
          "1 Introduction to Spectroscopy",
          "Introduction to Spectroscopy"
        );
        subjectAlias.set(
          "Part 1: IR Spectroscopy - Basics and Principle (Infra Red Spectroscopy)",
          "Basics and Principle (Infra Red Spectroscopy)"
        );
        subjectAlias.set(
          "IR spectroscopy principle basics",
          "IR Spectroscopy Principle Basics"
        );
        subjectAlias.set(
          "UV Vis spectroscopy explained lecture",
          "UV Vis Spectroscopy"
        );
        subjectAlias.set("NMR spectroscopy", "NMR Spectroscopy");
        subjectAlias.set(
          "3 Rotational/Microwave Spectroscopy",
          "Rotational/Microwave Spectroscopy"
        );
        subjectAlias.set(
          "4 Problems on Rotational & Vibrational Spectroscopy",
          "Problems on Rotational & Vibrational Spectroscopy"
        );
        subjectAlias.set(
          "5 Vibrational/Infrared Spectroscopy (Introduction to vibration,bending & degrees of freedom)",
          "Vibrational/Infrared Spectroscopy"
        );
        subjectAlias.set(
          "Part 2: Atomic Absorption Spectroscopy Working and Instrumentation",
          "Atomic Absorption Spectroscopy Working and Instrumentation"
        );
        //Colligative Properties
        
        subjectAlias.set(
          "Colligative Properties Equations and Formulas - Examples in everyday life",
          "Colligative Properties Equations and Formulas"
        );
        subjectAlias.set(
          "5.2 Colligative properties (Solution)",
          "Colligative Properties (Solution)"
        );
        subjectAlias.set(
          "Boiling point elevation and freezing point depression | Chemistry | Khan Academy",
          "Boiling Point Elevation and Freezing Point Depression"
        );
        
        //Water Treatment
        subjectAlias.set("alkalinity of water(part 1)", "Alkalinity of Water - Part 1");
        subjectAlias.set("alkalinity of water(part 2)", "Alkalinity of Water - Part 2");
        subjectAlias.set("lime and soda process", "Lime and Soda Process");
        subjectAlias.set(
          "hardness of water (lecture 1) by ANU SAMBYAL",
          "Hardness of Water"
        );
        subjectAlias.set(
          "Types of hardness(lecture 2)by Anu sambyal",
          "Types of Hardness"
        );
        subjectAlias.set(
          "hardness of water by EDTA method (lecture3) by Anu Sambyal",
          "Hardness of Water by EDTA Method - Part 1"
        );
        subjectAlias.set(
          "hardness of water by EDTA method (Part 2 )Lecture 4",
          "Hardness of Water by EDTA Method - Part 2"
        );
        subjectAlias.set(
          "numericals on EDTA(lecture 5)by Anu Sambyal",
          "Numericals on EDTA"
        );
        subjectAlias.set("Demineralization process", "Demineralization Process");
        subjectAlias.set("Desalination process", "Desalination Process");
        
        subjectAlias.set("zeolite process", "Zeolite Process");
        subjectAlias.set(
          "1st Numerical on Water by rishyjee",
          "Numerical on Water - 1"
        );
        subjectAlias.set(
          "Numerical no 2 on Water by rishyjee",
          "Numerical on Water - 2"
        );
        //Phase Rule
        subjectAlias.set(
          "Phase diagrams | States of matter and intermolecular forces | Chemistry | Khan Academy",
          "Phase Diagrams"
        );
        subjectAlias.set(
          "Phase, What is Phase, Phase Rule, What is Component, Degree of Freedom in Phase",
          "Phase, Component and Degree of Freedom"
        );
        subjectAlias.set(
          "Phase Rule Phase diagram of one component system",
          "Phase Diagram of One Component System"
        );
        subjectAlias.set("Chemistry Lecture: Phase Diagrams", "Phase Diagrams");
        subjectAlias.set(
          "phase diagrams Tin and Lead, part 1 of 3",
          "Phase Diagrams Tin and Lead - Part 1"
        );
        subjectAlias.set(
          "phase diagrams Tin and Lead, part 2 of 3",
          "Phase Diagrams Tin and Lead - Part 2"
        );
        subjectAlias.set(
          "phase diagrams Tin and Lead, part 3 of 3",
          "Phase Diagrams Tin and Lead - Part 3"
        );
        subjectAlias.set("Two component system", "Two Component System");
        
      

//mechanics
// dynamics of rigid bodies
subjectAlias.set('Dynamics IITM 6.1 Equations of motion of a rigid body','Equations of motion of a rigid body');
subjectAlias.set("D'Alembert's Principle - Kinetics of Particles Force and Acceleration - Engineering Mechanics","D'Alembert's Principle");
subjectAlias.set('Introduction to Kinematics of Rigid Bodies - Kinematics of Rigid Bodies - Engineering Mechanics','Introduction to dynamics of rigid bodies');
subjectAlias.set('Kinematics of Rigid Bodies - Problem 1 - Engineering Mechanics','Problem 1');
subjectAlias.set('Kinematics of Rigid Bodies - Problem 2 - Engineering Mechanics','Problem 2');

//work&energy
subjectAlias.set('Work Energy Principle - Kinetics of Particles Work and Energy - Engineering Mechanics','Introduction to work energy principle');
subjectAlias.set('Work Done by Spring Force - Kinetics of Particles Work and Energy - Engineering Mechanics','Work done by spring force');
subjectAlias.set('Work Energy Principle - Problem 1 - Kinetics of Particles Work and Energy - Engineering Mechanics','Problem 1');
subjectAlias.set('Work Energy Principle - Problem 2 - Kinetics of Particles Work and Energy - Engineering Mechanics','Problem 2');

//virtualwork
subjectAlias.set('Mechanical Engineering: Ch 13: Virtual Work Applications (1 of 39) What is Virtual Work? 1','What is virtual work? Part-1');
subjectAlias.set('Mechanical Engineering: Ch 13: Virtual Work Applications (2 of 39) What is Virtual Work? 2','What is virtual work? Part-2');
subjectAlias.set('Mechanical Engineering: Ch 13: Virtual Work Applications (3 of 39) What is Virtual Work Used For?','What is virtual work used for?');
subjectAlias.set('Mechanical Engineering: Ch 13: Virtual Work Applications (4 of 39) Virtual Work w/ Rotation & Torque','Virtual work- Rotation & Torque');
subjectAlias.set('Mechanical Engineering: Ch 13: Virtual Work Applications (5 of 39) Principals of Virtual Work','Principles of Virtual work');
subjectAlias.set('Mechanical Engineering: Ch 13: Virtual Work Applications (6 of 39) Partially Constraint Structure','Partially Constraint Structure');
subjectAlias.set('Mechanical Engineering: Ch 13: Virtual Work Applications (7 of 39) Completely Constraint Structure**','Completely Constraint Structure');
subjectAlias.set('Mechanical Engineering: Ch 13: Virtual Work Applications (8 of 39) What is Mechanical Efficiency? 1','What is mechanical efficiency? part-1');
subjectAlias.set('Mechanical Engineering: Ch 13: Virtual Work Applications (9 of 39) What is Mechanical Efficiency? 2','What is mechanical efficiency? part-2');
subjectAlias.set('Mechanical Engineering: Ch 13: Virtual Work Applications (10 of 39) Virtual Work and the Moment','Virtual work and moment');
subjectAlias.set('Mechanical Engineering: Ch 13: Virtual Work Applications (11 of 39) Virtual Work and a Spring***','Virtual work and spring');

//propertiesofplaneservices
subjectAlias.set('Properties of plane surfaces I - First moment and centroid of an area','First moment and centroid of an area');
subjectAlias.set('Properties of plane surfaces II - Centroid of an area made by joining several plane surfaces','Centroid of an area by joining several planes');
subjectAlias.set('Properties of plane surfaces III - Centroid of a distributed force and its relation with centre...','Centroid of a distributed force');
subjectAlias.set('Properties of plane surfaces IV - solved examples of calculation of first moment and centroid...','Solved examples');

//friction
subjectAlias.set('1. Friction | Limiting Friction | Angle of Friction','Limiting Friction');
subjectAlias.set('2. Cone of Friction | Angle of Repose','Angle of repose');
subjectAlias.set('3. Friction | Problem#1','Problem 1');
subjectAlias.set('4. Friction | Problem#2 | Most Important Problem','Problem 2 (important)');
subjectAlias.set('5. Friction | Problem#3','Problem 3');
subjectAlias.set('6. Friction | Problem#4 | Wedge Friction','Problem 4 (wedge friction)');
subjectAlias.set('7. Friction | Problem#5 | Wedge Friction','Problem 5 (wedge friction)');
subjectAlias.set('8. Friction | Problem#6','Problem 6');
subjectAlias.set('9. Friction | Problem#7 | Wedge Friction','Problem 7');
subjectAlias.set('10. Friction | Problem#8 | Ladder Friction','Problem 8 (Ladder friction)');
subjectAlias.set('11. Friction | Problem#9','Problem 9');
subjectAlias.set('12. Friction | Problem#10','Problem 10');

//planetrusses
subjectAlias.set('1. Truss | Definition and Mathematical conditions','What is a truss?');
subjectAlias.set('2. Basic assumptions and Methods to solve Truss Problems','Methods to solve truss problems');
subjectAlias.set('3. Beautiful Concepts to solve Truss Problems','Important concepts');
subjectAlias.set('4. Truss | Problem#1 | Method of Joints','Method of Joints Problem 1');
subjectAlias.set('5. Truss | Problem#2 | Method of Joints','Method of Joints Problem 2');
subjectAlias.set('6. Truss | Problem#3 | Method of Joints','Method of Joints Problem 3');
subjectAlias.set('7. Truss | Problem#4 | Method of Section','Method of Section Problem 4');
subjectAlias.set('8. Truss | Problem#5 | Method of Section','Method of Section Problem 5');
subjectAlias.set('9. Truss | Problem#6 | Method of Section','Method of Section Problem 6');
subjectAlias.set('10. Truss | Problem#7 | Method of Section','Method of Section Problem 7');
subjectAlias.set('11. Truss | Problem#8 | Method of Section','Method of Section Problem 8');
subjectAlias.set('Mechanics of Solids - IITM 2.7 Trusses - Method of Sections','Methods of sections');

//Computer Programming
subjectAlias.set('File Handling in C++ Part 1 | C++ Tutorials | Mr.Kishore','File handling(1)');
subjectAlias.set('File Handling in C++ Part 2 | C++ Tutorials | Mr.Kishore','File handling(2)');
subjectAlias.set('File Handling in C++ Part 3 | C++ Tutorials | Mr.Kishore','File handling(3)');
subjectAlias.set('File Handling in C++ Part 4 | C++ Tutorials | Mr.Kishore','File handling(4)');
subjectAlias.set('C++ File Position Indicators | Get Put | tellg tellp | seekg seekp','File pointers');
subjectAlias.set('File Handling in C++ Programming','File handling in C++');
subjectAlias.set('Introduction to Inheritance in C++ Part 1 | C++ Tutorial | Mr. Kishore','Inheritance');
subjectAlias.set('Single Level Inheritance in public & private Visibility Modes | C++ Tutorial | Mr. Kishore','Single level inheritance');
subjectAlias.set('Multiple Inheritance in C++ | C++ Tutorial | Mr. Kishore','Multiple inheritance');
subjectAlias.set('Multilevel Inheritance in C++ | C++ Tutorial | Mr. Kishore','Multilevel inheritance');
subjectAlias.set('Hierarchical Inheritance in C++ | C++ Tutorial | Mr. Kishore','Hierarachical inheritance');
subjectAlias.set('Virtual class in C++ | C++ Tutorial | Mr. Kishore','Virtual class');
subjectAlias.set('Pure Virtual function, Abstract base class | C ++ Tutorial | Mr. Kishore','Virtual function');
subjectAlias.set('Virtual destructors | C ++ Tutorial | Mr. Kishore','Virtual destructor');
subjectAlias.set('polymorphism in oops | OOPS','Polymorphism');
subjectAlias.set('virtual function or runtime polymorphism in c++ | OOPS','run time polymorphism');
subjectAlias.set('C++ Windows Programming Made Easy Tutorial 1 - WinMain','winMain');
subjectAlias.set('C++ Windows Programming Made Easy Tutorial 2 - Messageboxes','MessageBoxes');
subjectAlias.set('C++ Windows Programming Made Easy Tutorial 3 - Creating a Window [Part 1]','Window(1)');
subjectAlias.set('C++ Windows Programming Made Easy Tutorial 4 - Creating a Window [Part 2]','Window(2)');
subjectAlias.set('C Array - Part 1 | C Language Tutorial | Mr. Srinivas','Array(1)');
subjectAlias.set('C Array - Part 2 | C Language Tutorial','Array(2)');
subjectAlias.set('C Array - Part 3 | C Language Tutorial','Array(3)');
subjectAlias.set('C PROGRAMMING - TWO DIMENSIONAL ARRAYS','2D array');
subjectAlias.set('Pointers and arrays','Pointers and arrays');
subjectAlias.set('Strings - Part 1 | C Language Tutorial','String(1)');
subjectAlias.set('Strings - Part 2 | C Language Tutorial','String(2)');
subjectAlias.set('Strings in C | C Language Tutorial','String(3)');
subjectAlias.set('Introduction to Pointers | C Language Tutorial','Pointers');
subjectAlias.set('Size of Pointers | C Language Tutorial','Pointer size');
subjectAlias.set('Pointers - Pointer to Function | C Language Tutorial','Pointers to functions');
subjectAlias.set('Dynamic Memory Allocation | C Language Tutorial','Dynamic memory allocation');
subjectAlias.set('calloc() & malloc() | C Language Tutorial','calloc and malloc');
subjectAlias.set('realloc() | C Language Tutorial','realloc');
subjectAlias.set('Structures in C | C Language Tutorial','Structure');
subjectAlias.set('Array of Structures in C Part 1 | C Language Tutorial | Mr. Srinivas','Array of struct(1)');
subjectAlias.set('Array of Structures in C Part 2 | C Language Tutorial | Mr. Srinivas','Array of struct(2)');
subjectAlias.set('Introduction to Data Structures through C | Data Structures Tutorial | Mr. Srinivas','Data structure');
subjectAlias.set('Stack in Data Structure | Data Structure Tutorial | Mr. Srinivas','Stacking(1)');
subjectAlias.set('Creation of Stack in DS | Data Structures Tutorial | Mr. Srinivas','Stacking(2)');
subjectAlias.set('Queue | Data Structures Tutorial','Queue(1)');
subjectAlias.set('How to Perform Operations on Queue | by Mr. Srinivas','Queue(2)');
subjectAlias.set('Linked List using C | Data Structures Tutorial | Mr. Srinivas','Linked List');
subjectAlias.set('Single Linked List Operations | Data Structures Tutorial | Mr. Srinivas','Single Linked List');
subjectAlias.set('Templates or Generics Part 1 | C ++ Tutorial | Mr. Kishore','Templates(1)');
subjectAlias.set('Templates or Generics Part 2 | C ++ Tutorial | Mr. Kishore','Templates(2)');
subjectAlias.set('Templates or Generics Part 3 | C ++ Tutorial | Mr. Kishore','Templates(3)');
subjectAlias.set('Templates or Generics in C++ Part 4 | C ++ Tutorial | Mr. Kishore','Templates(4)');
subjectAlias.set('Templates or Generics in C++ Part 5 | C ++ Tutorial | Mr. Kishore','Templates(5)');
subjectAlias.set('Exception Handling in C++ Part-1 | C ++ Tutorial | Mr. Kishore','Exception handling(1)');
subjectAlias.set('Exception Handling in C++ Part-2 | C ++ Tutorial | Mr. Kishore','Exception handling(2)');
subjectAlias.set('Concepts of Algorithm, Flow Chart & C Programming','Algorithms,flowcharts and c');
subjectAlias.set('OCR GCSE 2.1 How to produce algorithms using pseudocode and flow diagrams','Pseudocode and flowchart');
subjectAlias.set('Generations of Programming Languages','Generations of Programming Languages');
subjectAlias.set('Writing and executing your first program: C Programming Tutorial 03','Starting with c');
subjectAlias.set('Steps for C Program Execution','Lifr of a c program');
subjectAlias.set('Basics of C programing 5: Basic Syntax of a C program - 1','Basic syntax');
subjectAlias.set('Tokens in C Programming','Tokens');
subjectAlias.set('Input and Output: Printf and Scanf - C Programming Tutorial 06','Inout and Output');
subjectAlias.set('Data types, Constants and Variables - C Programming Tutorial 05','Datatype,constant and variable');
subjectAlias.set('Using Arithmetic Operators - C Programming Tutorial 07','Arithmetic Operators');
subjectAlias.set('Know your data type: int - C Programming Tutorial 08','Different Datatype');
subjectAlias.set('If Statement in C Language for C Beginners - C Programming Training','If statement');
subjectAlias.set('Control Statements in C - while loop | C Language Tutorial','While loop');
subjectAlias.set('Control Statements in C - Nested While | C Language Tutorial','Nested While loop');
subjectAlias.set('Control Statements in C - for loop | C Language Tutorial','For loop');
subjectAlias.set('Control Statements in C - If Block | C Language Tutorial','If block');
subjectAlias.set('Nested if block in C | C Language Tutorial | Mr. Srinivas','Nested if block');
subjectAlias.set('Break Statement in C | C Language Tutorials | Mr.Srinivas','Break statements');
subjectAlias.set('break and continue in c programming | goto statement |','Break continue and goto');
subjectAlias.set('Functions in C | C Language Tutorial | Mr. Srinivas','Functions in c');
subjectAlias.set('functions in c programming | declaration, call and definition |','Declaration,Call and Definition');
subjectAlias.set('Basics of C Programing 29: Call By Value and Call by Reference','Call by value or by reference');
subjectAlias.set('Scope of Variables and Storage Classes','Scope of variables and storage glasses');
subjectAlias.set('Recursion in C Functions | C Language Tutorial','Recursion');
subjectAlias.set('Recurion vs Iteration','Recursion vs Iteration');
subjectAlias.set('C Programming in Linux Tutorial #056 - GDB debugger (1/2)','GDB debug(1)');
subjectAlias.set('C Programming in Linux Tutorial #057 - GDB debugger (2/2)','GDB debug(2)');


    // Youtube API Setup Starts
    var subjectAbr = ( '' + window.location.href ).split( '#first' )[1];
    var key = 'AIzaSyDx4VTk6azBY48eGwkYkpLQXdPxmCLuLLg';
    var channelId;
    if(subjectAbr == 'Mech' || subjectAbr == 'EngDraw' || subjectAbr == 'AppChem' || subjectAbr == 'AppPhy' || subjectAbr == 'EceEng'){
      channelId = 'UCqH46ioeOAHPjveiJb3R0rg';
    }
    console.log(subjectAbr);
    if (subjectAbr == 'Maths1' || subjectAbr == 'Maths2'){
      channelId = 'UCvpvfz1Neu6H5lcSZWO9qkA';
    }
    if (subjectAbr == 'CompOne' || subjectAbr == 'CompTwo' || subjectAbr == 'EleEng'){
      channelId = 'UCUNOMKsioROkOY3lGwu-Sqg';
    }
    console.log(channelId);
    // else if (subjectAbr == 'Maths1' || subjectAbr == 'Maths2'){

    // }

    var URL = 'https://www.googleapis.com/youtube/v3/playlists';
    var options = {
        part: 'snippet',
        key: key,
        maxResults: 50,
        channelId: channelId
    }
    // Youtube API Setup Ends


    
    console.log( subjectAbr );

    var subject;
    var subjectTheme;
    var playListNames = [];
    var playListIds = [];
    var thumbnailURLs = [];
    var videos;
    var bgCol;

    subject = subjects.get( subjectAbr );
    console.log ( subject );
    // subjectTheme = getSubjectTheme( subjectAbr );
    $('span.vlec__title').html = subjectAbr;

    function renderBoiler(subjectAbr, subject){
        bgCol = subjectThemes.get(subjectAbr);
    }
    renderBoiler(subjectAbr, subject);

    console.log(bgCol);

    renderBoiler(subject, subjectTheme);

    function generateSection (i, subjectAbr, topic, playlistId){
        // videos = loadVideos(playListId);
        // console.log('dekhle:' + topic);
        bgCol = subjectThemes.get(subjectAbr);
        var textNode = document.createElement('span');
        var colNode = '';
        var whiteNode = topic.split(' ')[1];
        for (var k = 2; topic.split(' ')[k] != undefined; k++){
          if(topic.split(' ')[k]!=undefined){
          colNode += topic.split(' ')[k];
          colNode += ' ';
          }
        }
        whiteNode += ' ';
        textNode.innerHTML = ('' + colNode);
        textNode.style.color = bgCol;
        var textNodeWrapper = document.createElement('div');
        textNodeWrapper.className = 'vlec__section__head display4';
        textNodeWrapper.innerHTML = whiteNode;
        textNodeWrapper.append(textNode);
        // textNodeWrapper.className = 'vlec__heads';
        var newSection = document.createElement('div');
        newSection.className = 'vlec__section vlec__section__' + i;
        newSection.append(textNodeWrapper);
        $('body').append(newSection);
//1
        var speed__1 = 0;
        var scroll__1 = 0;
        var container__1 = $('.vlec__section__1');
        var container_w__1 = container__1.width();
        var max_scroll__1 = container__1[0].scrollWidth - container__1.outerWidth();

        container__1.on('mousemove', function(e) {
          console.log(2);
          var mouse_x__1 = e.pageX - container__1.offset().left;
          var mouseperc__1 = 100 * mouse_x__1 / container_w__1;
          speed__1 = mouseperc__1 - 50;
        }).on ( 'mouseleave', function() {
          speed__1 = 0;
        });

        function updatescroll__1() {
          if (speed__1 !== 0) {
            scroll__1 += speed__1 / 5;
            if (scroll__1 < 0) scroll__1 = 0;
            if (scroll__1 > max_scroll__1) scroll__1 = max_scroll__1;
            $('.vlec__section__1').scrollLeft(scroll__1);
          }
          $("#speed").html('Speed: ' + speed__1);
          $("#scroll").html('Scroll: ' + scroll__1);

          window.requestAnimationFrame(updatescroll__1);
        }
        window.requestAnimationFrame(updatescroll__1);
//2
        var speed__2 = 0;
        var scroll__2 = 0;
        var container__2 = $('.vlec__section__2');
        var container_w__2 = container__2.width();
        var max_scroll__2 = container__2[0].scrollWidth - container__2.outerWidth();

        container__2.on('mousemove', function(e) {
          console.log(2);
          var mouse_x__2 = e.pageX - container__2.offset().left;
          var mouseperc__2 = 100 * mouse_x__2 / container_w__2;
          speed__2 = mouseperc__2 - 50;
        }).on ( 'mouseleave', function() {
          speed__2 = 0;
        });

        function updatescroll__2() {
          if (speed__2 !== 0) {
            scroll__2 += speed__2 / 5;
            if (scroll__2 < 0) scroll__2 = 0;
            if (scroll__2 > max_scroll__2) scroll__2 = max_scroll__2;
            $('.vlec__section__2').scrollLeft(scroll__2);
          }
          $("#speed").html('Speed: ' + speed__2);
          $("#scroll").html('Scroll: ' + scroll__2);

          window.requestAnimationFrame(updatescroll__2);
        }
        window.requestAnimationFrame(updatescroll__2);
//3
        var speed__3 = 0;
        var scroll__3 = 0;
        var container__3 = $('.vlec__section__3');
        var container_w__3 = container__3.width();
        var max_scroll__3 = container__3[0].scrollWidth - container__3.outerWidth();

        container__3.on('mousemove', function(e) {
          console.log(2);
          var mouse_x__3 = e.pageX - container__3.offset().left;
          var mouseperc__3 = 100 * mouse_x__3 / container_w__3;
          speed__3 = mouseperc__3 - 50;
        }).on ( 'mouseleave', function() {
          speed__3 = 0;
        });

        function updatescroll__3() {
          if (speed__3 !== 0) {
            scroll__3 += speed__3 / 5;
            if (scroll__3 < 0) scroll__3 = 0;
            if (scroll__3 > max_scroll__3) scroll__3 = max_scroll__3;
            $('.vlec__section__3').scrollLeft(scroll__3);
          }
          $("#speed").html('Speed: ' + speed__3);
          $("#scroll").html('Scroll: ' + scroll__3);

          window.requestAnimationFrame(updatescroll__3);
        }
        window.requestAnimationFrame(updatescroll__3);
//4
        var speed__4 = 0;
        var scroll__4 = 0;
        var container__4 = $('.vlec__section__4');
        var container_w__4 = container__4.width();
        var max_scroll__4 = container__4[0].scrollWidth - container__4.outerWidth();

        container__4.on('mousemove', function(e) {
          console.log(2);
          var mouse_x__4 = e.pageX - container__4.offset().left;
          var mouseperc__4 = 100 * mouse_x__4 / container_w__4;
          speed__4 = mouseperc__4 - 50;
        }).on ( 'mouseleave', function() {
          speed__4 = 0;
        });

        function updatescroll__4() {
          if (speed__4 !== 0) {
            scroll__4 += speed__4 / 5;
            if (scroll__4 < 0) scroll__4 = 0;
            if (scroll__4 > max_scroll__4) scroll__4 = max_scroll__4;
            $('.vlec__section__4').scrollLeft(scroll__4);
          }
          $("#speed").html('Speed: ' + speed__4);
          $("#scroll").html('Scroll: ' + scroll__4);

          window.requestAnimationFrame(updatescroll__4);
        }
        window.requestAnimationFrame(updatescroll__4);
//5
        var speed__5 = 0;
        var scroll__5 = 0;
        var container__5 = $('.vlec__section__5');
        var container_w__5 = container__5.width();
        var max_scroll__5 = container__5[0].scrollWidth - container__5.outerWidth();

        container__5.on('mousemove', function(e) {
          console.log(2);
          var mouse_x__5 = e.pageX - container__5.offset().left;
          var mouseperc__5 = 100 * mouse_x__5 / container_w__5;
          speed__5 = mouseperc__5 - 50;
        }).on ( 'mouseleave', function() {
          speed__5 = 0;
        });

        function updatescroll__5() {
          if (speed__5 !== 0) {
            scroll__5 += speed__5 / 5;
            if (scroll__5 < 0) scroll__5 = 0;
            if (scroll__5 > max_scroll__5) scroll__5 = max_scroll__5;
            $('.vlec__section__5').scrollLeft(scroll__5);
          }
          $("#speed").html('Speed: ' + speed__5);
          $("#scroll").html('Scroll: ' + scroll__5);

          window.requestAnimationFrame(updatescroll__5);
        }
        window.requestAnimationFrame(updatescroll__5);
//6
        var speed__6 = 0;
        var scroll__6 = 0;
        var container__6 = $('.vlec__section__6');
        var container_w__6 = container__6.width();
        var max_scroll__6 = container__6[0].scrollWidth - container__6.outerWidth();

        container__6.on('mousemove', function(e) {
          console.log(2);
          var mouse_x__6 = e.pageX - container__6.offset().left;
          var mouseperc__6 = 100 * mouse_x__6 / container_w__6;
          speed__6 = mouseperc__6 - 50;
        }).on ( 'mouseleave', function() {
          speed__6 = 0;
        });

        function updatescroll__6() {
          if (speed__6 !== 0) {
            scroll__6 += speed__6 / 5;
            if (scroll__6 < 0) scroll__6 = 0;
            if (scroll__6 > max_scroll__6) scroll__6 = max_scroll__6;
            $('.vlec__section__6').scrollLeft(scroll__6);
          }
          $("#speed").html('Speed: ' + speed__6);
          $("#scroll").html('Scroll: ' + scroll__6);

          window.requestAnimationFrame(updatescroll__6);
        }
        window.requestAnimationFrame(updatescroll__6);
//7
        var speed__7 = 0;
        var scroll__7 = 0;
        var container__7 = $('.vlec__section__7');
        var container_w__7 = container__7.width();
        var max_scroll__7 = container__7[0].scrollWidth - container__7.outerWidth();

        container__7.on('mousemove', function(e) {
          console.log(2);
          var mouse_x__7 = e.pageX - container__7.offset().left;
          var mouseperc__7 = 100 * mouse_x__7 / container_w__7;
          speed__7 = mouseperc__7 - 50;
        }).on ( 'mouseleave', function() {
          speed__7 = 0;
        });

        function updatescroll__7() {
          if (speed__7 !== 0) {
            scroll__7 += speed__7 / 5;
            if (scroll__7 < 0) scroll__7 = 0;
            if (scroll__7 > max_scroll__7) scroll__7 = max_scroll__7;
            $('.vlec__section__7').scrollLeft(scroll__7);
          }
          $("#speed").html('Speed: ' + speed__7);
          $("#scroll").html('Scroll: ' + scroll__7);

          window.requestAnimationFrame(updatescroll__7);
        }
        window.requestAnimationFrame(updatescroll__7);
//8
        var speed__8 = 0;
        var scroll__8 = 0;
        var container__8 = $('.vlec__section__8');
        var container_w__8 = container__8.width();
        var max_scroll__8 = container__8[0].scrollWidth - container__8.outerWidth();

        container__8.on('mousemove', function(e) {
          console.log(2);
          var mouse_x__8 = e.pageX - container__8.offset().left;
          var mouseperc__8 = 100 * mouse_x__8 / container_w__8;
          speed__8 = mouseperc__8 - 50;
        }).on ( 'mouseleave', function() {
          speed__8 = 0;
        });

        function updatescroll__8() {
          if (speed__8 !== 0) {
            scroll__8 += speed__8 / 5;
            if (scroll__8 < 0) scroll__8 = 0;
            if (scroll__8 > max_scroll__8) scroll__8 = max_scroll__8;
            $('.vlec__section__8').scrollLeft(scroll__8);
          }
          $("#speed").html('Speed: ' + speed__8);
          $("#scroll").html('Scroll: ' + scroll__8);

          window.requestAnimationFrame(updatescroll__8);
        }
        window.requestAnimationFrame(updatescroll__8);
//9
        var speed__9 = 0;
        var scroll__9 = 0;
        var container__9 = $('.vlec__section__9');
        var container_w__9 = container__9.width();
        var max_scroll__9 = container__9[0].scrollWidth - container__9.outerWidth();

        container__9.on('mousemove', function(e) {
          console.log(2);
          var mouse_x__9 = e.pageX - container__9.offset().left;
          var mouseperc__9 = 100 * mouse_x__9 / container_w__9;
          speed__9 = mouseperc__9 - 50;
        }).on ( 'mouseleave', function() {
          speed__9 = 0;
        });

        function updatescroll__9() {
          if (speed__9 !== 0) {
            scroll__9 += speed__9 / 5;
            if (scroll__9 < 0) scroll__9 = 0;
            if (scroll__9 > max_scroll__9) scroll__9 = max_scroll__9;
            $('.vlec__section__9').scrollLeft(scroll__9);
          }
          $("#speed").html('Speed: ' + speed__9);
          $("#scroll").html('Scroll: ' + scroll__9);

          window.requestAnimationFrame(updatescroll__9);
        }
        window.requestAnimationFrame(updatescroll__9);
//10
        var speed__10 = 0;
        var scroll__10 = 0;
        var container__10 = $('.vlec__section__10');
        var container_w__10 = container__10.width();
        var max_scroll__10 = container__10[0].scrollWidth - container__10.outerWidth();

        container__10.on('mousemove', function(e) {
          console.log(2);
          var mouse_x__10 = e.pageX - container__10.offset().left;
          var mouseperc__10 = 100 * mouse_x__10 / container_w__10;
          speed__10 = mouseperc__10 - 50;
        }).on ( 'mouseleave', function() {
          speed__10 = 0;
        });

        function updatescroll__10() {
          if (speed__10 !== 0) {
            scroll__10 += speed__10 / 5;
            if (scroll__10 < 0) scroll__10 = 0;
            if (scroll__10 > max_scroll__10) scroll__10 = max_scroll__10;
            $('.vlec__section__10').scrollLeft(scroll__10);
          }
          $("#speed").html('Speed: ' + speed__10);
          $("#scroll").html('Scroll: ' + scroll__10);

          window.requestAnimationFrame(updatescroll__10);
        }
        window.requestAnimationFrame(updatescroll__10);
//11
        var speed__11 = 0;
        var scroll__11 = 0;
        var container__11 = $('.vlec__section__11');
        var container_w__11 = container__11.width();
        var max_scroll__11 = container__11[0].scrollWidth - container__11.outerWidth();

        container__11.on('mousemove', function(e) {
          console.log(2);
          var mouse_x__11 = e.pageX - container__11.offset().left;
          var mouseperc__11 = 100 * mouse_x__11 / container_w__11;
          speed__11 = mouseperc__11 - 50;
        }).on ( 'mouseleave', function() {
          speed__11 = 0;
        });

        function updatescroll__11() {
          if (speed__11 !== 0) {
            scroll__11 += speed__11 / 5;
            if (scroll__11 < 0) scroll__11 = 0;
            if (scroll__11 > max_scroll__11) scroll__11 = max_scroll__11;
            $('.vlec__section__11').scrollLeft(scroll__11);
          }
          $("#speed").html('Speed: ' + speed__11);
          $("#scroll").html('Scroll: ' + scroll__11);

          window.requestAnimationFrame(updatescroll__11);
        }
        window.requestAnimationFrame(updatescroll__11);
//12
        var speed__12 = 0;
        var scroll__12 = 0;
        var container__12 = $('.vlec__section__12');
        var container_w__12 = container__12.width();
        var max_scroll__12 = container__12[0].scrollWidth - container__12.outerWidth();

        container__12.on('mousemove', function(e) {
          console.log(2);
          var mouse_x__12 = e.pageX - container__12.offset().left;
          var mouseperc__12 = 100 * mouse_x__12 / container_w__12;
          speed__12 = mouseperc__12 - 50;
        }).on ( 'mouseleave', function() {
          speed__12 = 0;
        });

        function updatescroll__12() {
          if (speed__12 !== 0) {
            scroll__12 += speed__12 / 5;
            if (scroll__12 < 0) scroll__12 = 0;
            if (scroll__12 > max_scroll__12) scroll__12 = max_scroll__12;
            $('.vlec__section__12').scrollLeft(scroll__12);
          }
          $("#speed").html('Speed: ' + speed__12);
          $("#scroll").html('Scroll: ' + scroll__12);

          window.requestAnimationFrame(updatescroll__12);
        }
        window.requestAnimationFrame(updatescroll__12);

        $('.vlec__section').css("background-color", 'black');

        var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
        var options = {
            part: 'snippet',
            key: key,
            maxResults: 25,
            playlistId: playlistId
        }
        $.getJSON(URL, options, function(data){
            console.log(data.items);
            data.items.forEach(function(element, j = 1){
              console.log(element.snippet.title);
              var newElement = document.createElement('div');
              newElement.onclick = 'getModal()';
              numString = 'vlec__section__grid__element__' + (i) + '__' + (j+1);
              newElement.className = 'vlec__section__grid__element ' + numString;
              var thumbnailURI = element.snippet.thumbnails.high.url;
              console.log(thumbnailURI);
              var newElementText = document.createElement('h1');
              if (subjectAlias.get(element.snippet.title) == undefined){
                  newElementText.innerHTML = element.snippet.title;
              }
              else newElementText.innerHTML = subjectAlias.get(element.snippet.title);
              newElementText.className = 'videotitle display6';
              newElement.append(newElementText);
              //newElement.style.backgroundColor = 'rgb(79, 132, 196)';
              // newElement.style.backgroundSize = 'cover';
              // newElement.style.backgroundPosition = 'center';
              console.log(679);
              newSection.append(newElement);

              j++;

              $(newElement).click(function(){
                var key = 'https://www.youtube.com/embed/videoseries?list=' + playlistId + '&index=' + (j-1);
                getModal(key);
                // http://www.youtube.com/embed/videoseries?list=PL9C5815B418D1508E&index=7
              });

              if ( window.innerWidth >= '900'){


              $('.vlec__section__grid__element__1__1').mouseenter(function(){
                $('.vlec__section__grid__element__1__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__1__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__1').mouseleave(function(){
                $('.vlec__section__grid__element__1__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__2').mouseenter(function(){
                $('.vlec__section__grid__element__1__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__2').mouseleave(function(){
                $('.vlec__section__grid__element__1__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__3').mouseenter(function(){
                $('.vlec__section__grid__element__1__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__3').mouseleave(function(){
                $('.vlec__section__grid__element__1__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__4').mouseenter(function(){
                $('.vlec__section__grid__element__1__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__4').mouseleave(function(){
                $('.vlec__section__grid__element__1__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__5').mouseenter(function(){
                $('.vlec__section__grid__element__1__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__5').mouseleave(function(){
                $('.vlec__section__grid__element__1__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__6').mouseenter(function(){
                $('.vlec__section__grid__element__1__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__6').mouseleave(function(){
                $('.vlec__section__grid__element__1__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__7').mouseenter(function(){
                $('.vlec__section__grid__element__1__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__7').mouseleave(function(){
                $('.vlec__section__grid__element__1__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__8').mouseenter(function(){
                $('.vlec__section__grid__element__1__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__8').mouseleave(function(){
                $('.vlec__section__grid__element__1__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__9').mouseenter(function(){
                $('.vlec__section__grid__element__1__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__9').mouseleave(function(){
                $('.vlec__section__grid__element__1__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__10').mouseenter(function(){
                $('.vlec__section__grid__element__1__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__10').mouseleave(function(){
                $('.vlec__section__grid__element__1__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__11').mouseenter(function(){
                $('.vlec__section__grid__element__1__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__11').mouseleave(function(){
                $('.vlec__section__grid__element__1__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__12').mouseenter(function(){
                $('.vlec__section__grid__element__1__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__12').mouseleave(function(){
                $('.vlec__section__grid__element__1__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__13').mouseenter(function(){
                $('.vlec__section__grid__element__1__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__13').mouseleave(function(){
                $('.vlec__section__grid__element__1__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__14').mouseenter(function(){
                $('.vlec__section__grid__element__1__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__14').mouseleave(function(){
                $('.vlec__section__grid__element__1__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__15').mouseenter(function(){
                $('.vlec__section__grid__element__1__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__15').mouseleave(function(){
                $('.vlec__section__grid__element__1__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__16').mouseenter(function(){
                $('.vlec__section__grid__element__1__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__16').mouseleave(function(){
                $('.vlec__section__grid__element__1__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__17').mouseenter(function(){
                $('.vlec__section__grid__element__1__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__17').mouseleave(function(){
                $('.vlec__section__grid__element__1__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__18').mouseenter(function(){
                $('.vlec__section__grid__element__1__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__18').mouseleave(function(){
                $('.vlec__section__grid__element__1__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__19').mouseenter(function(){
                $('.vlec__section__grid__element__1__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__19').mouseleave(function(){
                $('.vlec__section__grid__element__1__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__20').mouseenter(function(){
                $('.vlec__section__grid__element__1__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__20').mouseleave(function(){
                $('.vlec__section__grid__element__1__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });


//2

              $('.vlec__section__grid__element__2__1').mouseenter(function(){
                $('.vlec__section__grid__element__2__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__2__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__1').mouseleave(function(){
                $('.vlec__section__grid__element__2__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__2').mouseenter(function(){
                $('.vlec__section__grid__element__2__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__2').mouseleave(function(){
                $('.vlec__section__grid__element__2__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__3').mouseenter(function(){
                $('.vlec__section__grid__element__2__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__3').mouseleave(function(){
                $('.vlec__section__grid__element__2__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__4').mouseenter(function(){
                $('.vlec__section__grid__element__2__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__4').mouseleave(function(){
                $('.vlec__section__grid__element__2__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__5').mouseenter(function(){
                $('.vlec__section__grid__element__2__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__5').mouseleave(function(){
                $('.vlec__section__grid__element__2__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__6').mouseenter(function(){
                $('.vlec__section__grid__element__2__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__6').mouseleave(function(){
                $('.vlec__section__grid__element__2__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__7').mouseenter(function(){
                $('.vlec__section__grid__element__2__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__7').mouseleave(function(){
                $('.vlec__section__grid__element__2__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__8').mouseenter(function(){
                $('.vlec__section__grid__element__2__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__8').mouseleave(function(){
                $('.vlec__section__grid__element__2__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__9').mouseenter(function(){
                $('.vlec__section__grid__element__2__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__9').mouseleave(function(){
                $('.vlec__section__grid__element__2__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__10').mouseenter(function(){
                $('.vlec__section__grid__element__2__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__10').mouseleave(function(){
                $('.vlec__section__grid__element__2__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__11').mouseenter(function(){
                $('.vlec__section__grid__element__2__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__11').mouseleave(function(){
                $('.vlec__section__grid__element__2__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__12').mouseenter(function(){
                $('.vlec__section__grid__element__2__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__12').mouseleave(function(){
                $('.vlec__section__grid__element__2__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__13').mouseenter(function(){
                $('.vlec__section__grid__element__2__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__13').mouseleave(function(){
                $('.vlec__section__grid__element__2__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__14').mouseenter(function(){
                $('.vlec__section__grid__element__2__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__14').mouseleave(function(){
                $('.vlec__section__grid__element__2__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__15').mouseenter(function(){
                $('.vlec__section__grid__element__2__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__15').mouseleave(function(){
                $('.vlec__section__grid__element__2__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__16').mouseenter(function(){
                $('.vlec__section__grid__element__2__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__16').mouseleave(function(){
                $('.vlec__section__grid__element__2__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__17').mouseenter(function(){
                $('.vlec__section__grid__element__2__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__17').mouseleave(function(){
                $('.vlec__section__grid__element__2__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__18').mouseenter(function(){
                $('.vlec__section__grid__element__2__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__18').mouseleave(function(){
                $('.vlec__section__grid__element__2__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__19').mouseenter(function(){
                $('.vlec__section__grid__element__2__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__19').mouseleave(function(){
                $('.vlec__section__grid__element__2__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__20').mouseenter(function(){
                $('.vlec__section__grid__element__2__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__20').mouseleave(function(){
                $('.vlec__section__grid__element__2__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

//3

              $('.vlec__section__grid__element__3__1').mouseenter(function(){
                $('.vlec__section__grid__element__3__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__3__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__1').mouseleave(function(){
                $('.vlec__section__grid__element__3__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__2').mouseenter(function(){
                $('.vlec__section__grid__element__3__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__2').mouseleave(function(){
                $('.vlec__section__grid__element__3__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__3').mouseenter(function(){
                $('.vlec__section__grid__element__3__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__3').mouseleave(function(){
                $('.vlec__section__grid__element__3__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__4').mouseenter(function(){
                $('.vlec__section__grid__element__3__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__4').mouseleave(function(){
                $('.vlec__section__grid__element__3__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__5').mouseenter(function(){
                $('.vlec__section__grid__element__3__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__5').mouseleave(function(){
                $('.vlec__section__grid__element__3__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__6').mouseenter(function(){
                $('.vlec__section__grid__element__3__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__6').mouseleave(function(){
                $('.vlec__section__grid__element__3__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__7').mouseenter(function(){
                $('.vlec__section__grid__element__3__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__7').mouseleave(function(){
                $('.vlec__section__grid__element__3__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__8').mouseenter(function(){
                $('.vlec__section__grid__element__3__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__8').mouseleave(function(){
                $('.vlec__section__grid__element__3__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__9').mouseenter(function(){
                $('.vlec__section__grid__element__3__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__9').mouseleave(function(){
                $('.vlec__section__grid__element__3__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__10').mouseenter(function(){
                $('.vlec__section__grid__element__3__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__10').mouseleave(function(){
                $('.vlec__section__grid__element__3__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__11').mouseenter(function(){
                $('.vlec__section__grid__element__3__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__11').mouseleave(function(){
                $('.vlec__section__grid__element__3__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__12').mouseenter(function(){
                $('.vlec__section__grid__element__3__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__12').mouseleave(function(){
                $('.vlec__section__grid__element__3__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__13').mouseenter(function(){
                $('.vlec__section__grid__element__3__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__13').mouseleave(function(){
                $('.vlec__section__grid__element__3__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__14').mouseenter(function(){
                $('.vlec__section__grid__element__3__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__14').mouseleave(function(){
                $('.vlec__section__grid__element__3__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__15').mouseenter(function(){
                $('.vlec__section__grid__element__3__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__15').mouseleave(function(){
                $('.vlec__section__grid__element__3__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__16').mouseenter(function(){
                $('.vlec__section__grid__element__3__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__16').mouseleave(function(){
                $('.vlec__section__grid__element__3__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__17').mouseenter(function(){
                $('.vlec__section__grid__element__3__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__17').mouseleave(function(){
                $('.vlec__section__grid__element__3__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__18').mouseenter(function(){
                $('.vlec__section__grid__element__3__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__18').mouseleave(function(){
                $('.vlec__section__grid__element__3__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__19').mouseenter(function(){
                $('.vlec__section__grid__element__3__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__19').mouseleave(function(){
                $('.vlec__section__grid__element__3__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__20').mouseenter(function(){
                $('.vlec__section__grid__element__3__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__20').mouseleave(function(){
                $('.vlec__section__grid__element__3__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

//4

              $('.vlec__section__grid__element__4__1').mouseenter(function(){
                $('.vlec__section__grid__element__4__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__4__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__1').mouseleave(function(){
                $('.vlec__section__grid__element__4__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__2').mouseenter(function(){
                $('.vlec__section__grid__element__4__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__2').mouseleave(function(){
                $('.vlec__section__grid__element__4__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__3').mouseenter(function(){
                $('.vlec__section__grid__element__4__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__3').mouseleave(function(){
                $('.vlec__section__grid__element__4__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__4').mouseenter(function(){
                $('.vlec__section__grid__element__4__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__4').mouseleave(function(){
                $('.vlec__section__grid__element__4__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__5').mouseenter(function(){
                $('.vlec__section__grid__element__4__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__5').mouseleave(function(){
                $('.vlec__section__grid__element__4__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__6').mouseenter(function(){
                $('.vlec__section__grid__element__4__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__6').mouseleave(function(){
                $('.vlec__section__grid__element__4__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__7').mouseenter(function(){
                $('.vlec__section__grid__element__4__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__7').mouseleave(function(){
                $('.vlec__section__grid__element__4__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__8').mouseenter(function(){
                $('.vlec__section__grid__element__4__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__8').mouseleave(function(){
                $('.vlec__section__grid__element__4__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__9').mouseenter(function(){
                $('.vlec__section__grid__element__4__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__9').mouseleave(function(){
                $('.vlec__section__grid__element__4__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__10').mouseenter(function(){
                $('.vlec__section__grid__element__4__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__10').mouseleave(function(){
                $('.vlec__section__grid__element__4__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__11').mouseenter(function(){
                $('.vlec__section__grid__element__4__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__11').mouseleave(function(){
                $('.vlec__section__grid__element__4__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__12').mouseenter(function(){
                $('.vlec__section__grid__element__4__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__12').mouseleave(function(){
                $('.vlec__section__grid__element__4__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__13').mouseenter(function(){
                $('.vlec__section__grid__element__4__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__13').mouseleave(function(){
                $('.vlec__section__grid__element__4__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__14').mouseenter(function(){
                $('.vlec__section__grid__element__4__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__14').mouseleave(function(){
                $('.vlec__section__grid__element__4__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__15').mouseenter(function(){
                $('.vlec__section__grid__element__4__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__15').mouseleave(function(){
                $('.vlec__section__grid__element__4__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__16').mouseenter(function(){
                $('.vlec__section__grid__element__4__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__16').mouseleave(function(){
                $('.vlec__section__grid__element__4__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__17').mouseenter(function(){
                $('.vlec__section__grid__element__4__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__17').mouseleave(function(){
                $('.vlec__section__grid__element__4__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__18').mouseenter(function(){
                $('.vlec__section__grid__element__4__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__18').mouseleave(function(){
                $('.vlec__section__grid__element__4__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__19').mouseenter(function(){
                $('.vlec__section__grid__element__4__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__19').mouseleave(function(){
                $('.vlec__section__grid__element__4__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__20').mouseenter(function(){
                $('.vlec__section__grid__element__4__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__20').mouseleave(function(){
                $('.vlec__section__grid__element__4__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

//5

              $('.vlec__section__grid__element__5__1').mouseenter(function(){
                $('.vlec__section__grid__element__5__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__5__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__1').mouseleave(function(){
                $('.vlec__section__grid__element__5__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__2').mouseenter(function(){
                $('.vlec__section__grid__element__5__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__2').mouseleave(function(){
                $('.vlec__section__grid__element__5__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__3').mouseenter(function(){
                $('.vlec__section__grid__element__5__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__3').mouseleave(function(){
                $('.vlec__section__grid__element__5__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__4').mouseenter(function(){
                $('.vlec__section__grid__element__5__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__4').mouseleave(function(){
                $('.vlec__section__grid__element__5__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__5').mouseenter(function(){
                $('.vlec__section__grid__element__5__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__5').mouseleave(function(){
                $('.vlec__section__grid__element__5__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__6').mouseenter(function(){
                $('.vlec__section__grid__element__5__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__6').mouseleave(function(){
                $('.vlec__section__grid__element__5__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__7').mouseenter(function(){
                $('.vlec__section__grid__element__5__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__7').mouseleave(function(){
                $('.vlec__section__grid__element__5__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__8').mouseenter(function(){
                $('.vlec__section__grid__element__5__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__8').mouseleave(function(){
                $('.vlec__section__grid__element__5__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__9').mouseenter(function(){
                $('.vlec__section__grid__element__5__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__9').mouseleave(function(){
                $('.vlec__section__grid__element__5__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__10').mouseenter(function(){
                $('.vlec__section__grid__element__5__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__10').mouseleave(function(){
                $('.vlec__section__grid__element__5__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__11').mouseenter(function(){
                $('.vlec__section__grid__element__5__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__11').mouseleave(function(){
                $('.vlec__section__grid__element__5__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__12').mouseenter(function(){
                $('.vlec__section__grid__element__5__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__12').mouseleave(function(){
                $('.vlec__section__grid__element__5__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__13').mouseenter(function(){
                $('.vlec__section__grid__element__5__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__13').mouseleave(function(){
                $('.vlec__section__grid__element__5__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__14').mouseenter(function(){
                $('.vlec__section__grid__element__5__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__14').mouseleave(function(){
                $('.vlec__section__grid__element__5__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__15').mouseenter(function(){
                $('.vlec__section__grid__element__5__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__15').mouseleave(function(){
                $('.vlec__section__grid__element__5__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__16').mouseenter(function(){
                $('.vlec__section__grid__element__5__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__16').mouseleave(function(){
                $('.vlec__section__grid__element__5__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__17').mouseenter(function(){
                $('.vlec__section__grid__element__5__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__17').mouseleave(function(){
                $('.vlec__section__grid__element__5__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__18').mouseenter(function(){
                $('.vlec__section__grid__element__5__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__18').mouseleave(function(){
                $('.vlec__section__grid__element__5__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__19').mouseenter(function(){
                $('.vlec__section__grid__element__5__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__19').mouseleave(function(){
                $('.vlec__section__grid__element__5__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__20').mouseenter(function(){
                $('.vlec__section__grid__element__5__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });


              $('.vlec__section__grid__element__5__20').mouseleave(function(){
                $('.vlec__section__grid__element__5__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

// 6

              $('.vlec__section__grid__element__6__1').mouseenter(function(){
                $('.vlec__section__grid__element__6__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__6__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__1').mouseleave(function(){
                $('.vlec__section__grid__element__6__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__2').mouseenter(function(){
                $('.vlec__section__grid__element__6__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__2').mouseleave(function(){
                $('.vlec__section__grid__element__6__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__3').mouseenter(function(){
                $('.vlec__section__grid__element__6__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__3').mouseleave(function(){
                $('.vlec__section__grid__element__6__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__4').mouseenter(function(){
                $('.vlec__section__grid__element__6__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__4').mouseleave(function(){
                $('.vlec__section__grid__element__6__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__5').mouseenter(function(){
                $('.vlec__section__grid__element__6__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__5').mouseleave(function(){
                $('.vlec__section__grid__element__6__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__6').mouseenter(function(){
                $('.vlec__section__grid__element__6__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__6').mouseleave(function(){
                $('.vlec__section__grid__element__6__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__7').mouseenter(function(){
                $('.vlec__section__grid__element__6__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__7').mouseleave(function(){
                $('.vlec__section__grid__element__6__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__8').mouseenter(function(){
                $('.vlec__section__grid__element__6__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__8').mouseleave(function(){
                $('.vlec__section__grid__element__6__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__9').mouseenter(function(){
                $('.vlec__section__grid__element__6__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__9').mouseleave(function(){
                $('.vlec__section__grid__element__6__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__10').mouseenter(function(){
                $('.vlec__section__grid__element__6__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__10').mouseleave(function(){
                $('.vlec__section__grid__element__6__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__11').mouseenter(function(){
                $('.vlec__section__grid__element__6__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__11').mouseleave(function(){
                $('.vlec__section__grid__element__6__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__12').mouseenter(function(){
                $('.vlec__section__grid__element__6__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__12').mouseleave(function(){
                $('.vlec__section__grid__element__6__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__13').mouseenter(function(){
                $('.vlec__section__grid__element__6__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__13').mouseleave(function(){
                $('.vlec__section__grid__element__6__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__14').mouseenter(function(){
                $('.vlec__section__grid__element__6__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__14').mouseleave(function(){
                $('.vlec__section__grid__element__6__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__15').mouseenter(function(){
                $('.vlec__section__grid__element__6__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__15').mouseleave(function(){
                $('.vlec__section__grid__element__6__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__16').mouseenter(function(){
                $('.vlec__section__grid__element__6__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__16').mouseleave(function(){
                $('.vlec__section__grid__element__6__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__17').mouseenter(function(){
                $('.vlec__section__grid__element__6__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__17').mouseleave(function(){
                $('.vlec__section__grid__element__6__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__18').mouseenter(function(){
                $('.vlec__section__grid__element__6__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__18').mouseleave(function(){
                $('.vlec__section__grid__element__6__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__19').mouseenter(function(){
                $('.vlec__section__grid__element__6__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__19').mouseleave(function(){
                $('.vlec__section__grid__element__6__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__20').mouseenter(function(){
                $('.vlec__section__grid__element__6__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__20').mouseleave(function(){
                $('.vlec__section__grid__element__6__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

//7


              $('.vlec__section__grid__element__7__1').mouseenter(function(){
                $('.vlec__section__grid__element__7__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__7__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__1').mouseleave(function(){
                $('.vlec__section__grid__element__7__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__2').mouseenter(function(){
                $('.vlec__section__grid__element__7__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__2').mouseleave(function(){
                $('.vlec__section__grid__element__7__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__3').mouseenter(function(){
                $('.vlec__section__grid__element__7__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__3').mouseleave(function(){
                $('.vlec__section__grid__element__7__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__4').mouseenter(function(){
                $('.vlec__section__grid__element__7__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__4').mouseleave(function(){
                $('.vlec__section__grid__element__7__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__5').mouseenter(function(){
                $('.vlec__section__grid__element__7__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__5').mouseleave(function(){
                $('.vlec__section__grid__element__7__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__6').mouseenter(function(){
                $('.vlec__section__grid__element__7__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__6').mouseleave(function(){
                $('.vlec__section__grid__element__7__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__7').mouseenter(function(){
                $('.vlec__section__grid__element__7__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__7').mouseleave(function(){
                $('.vlec__section__grid__element__7__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__8').mouseenter(function(){
                $('.vlec__section__grid__element__7__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__8').mouseleave(function(){
                $('.vlec__section__grid__element__7__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__9').mouseenter(function(){
                $('.vlec__section__grid__element__7__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__9').mouseleave(function(){
                $('.vlec__section__grid__element__7__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__10').mouseenter(function(){
                $('.vlec__section__grid__element__7__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__10').mouseleave(function(){
                $('.vlec__section__grid__element__7__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__11').mouseenter(function(){
                $('.vlec__section__grid__element__7__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__11').mouseleave(function(){
                $('.vlec__section__grid__element__7__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__12').mouseenter(function(){
                $('.vlec__section__grid__element__7__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__12').mouseleave(function(){
                $('.vlec__section__grid__element__7__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__13').mouseenter(function(){
                $('.vlec__section__grid__element__7__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__13').mouseleave(function(){
                $('.vlec__section__grid__element__7__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__14').mouseenter(function(){
                $('.vlec__section__grid__element__7__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__14').mouseleave(function(){
                $('.vlec__section__grid__element__7__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__15').mouseenter(function(){
                $('.vlec__section__grid__element__7__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__15').mouseleave(function(){
                $('.vlec__section__grid__element__7__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__16').mouseenter(function(){
                $('.vlec__section__grid__element__7__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__16').mouseleave(function(){
                $('.vlec__section__grid__element__7__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__17').mouseenter(function(){
                $('.vlec__section__grid__element__7__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__17').mouseleave(function(){
                $('.vlec__section__grid__element__7__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__18').mouseenter(function(){
                $('.vlec__section__grid__element__7__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__18').mouseleave(function(){
                $('.vlec__section__grid__element__7__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__19').mouseenter(function(){
                $('.vlec__section__grid__element__7__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__19').mouseleave(function(){
                $('.vlec__section__grid__element__7__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__20').mouseenter(function(){
                $('.vlec__section__grid__element__7__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__20').mouseleave(function(){
                $('.vlec__section__grid__element__7__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

//8

              $('.vlec__section__grid__element__8__1').mouseenter(function(){
                $('.vlec__section__grid__element__8__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__8__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__1').mouseleave(function(){
                $('.vlec__section__grid__element__8__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__2').mouseenter(function(){
                $('.vlec__section__grid__element__8__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__2').mouseleave(function(){
                $('.vlec__section__grid__element__8__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__3').mouseenter(function(){
                $('.vlec__section__grid__element__8__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__3').mouseleave(function(){
                $('.vlec__section__grid__element__8__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__4').mouseenter(function(){
                $('.vlec__section__grid__element__8__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__4').mouseleave(function(){
                $('.vlec__section__grid__element__8__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__5').mouseenter(function(){
                $('.vlec__section__grid__element__8__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__5').mouseleave(function(){
                $('.vlec__section__grid__element__8__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__6').mouseenter(function(){
                $('.vlec__section__grid__element__8__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__6').mouseleave(function(){
                $('.vlec__section__grid__element__8__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__7').mouseenter(function(){
                $('.vlec__section__grid__element__8__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__7').mouseleave(function(){
                $('.vlec__section__grid__element__8__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__8').mouseenter(function(){
                $('.vlec__section__grid__element__8__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__8').mouseleave(function(){
                $('.vlec__section__grid__element__8__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__9').mouseenter(function(){
                $('.vlec__section__grid__element__8__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__9').mouseleave(function(){
                $('.vlec__section__grid__element__8__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__10').mouseenter(function(){
                $('.vlec__section__grid__element__8__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__10').mouseleave(function(){
                $('.vlec__section__grid__element__8__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__11').mouseenter(function(){
                $('.vlec__section__grid__element__8__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__11').mouseleave(function(){
                $('.vlec__section__grid__element__8__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__12').mouseenter(function(){
                $('.vlec__section__grid__element__8__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__12').mouseleave(function(){
                $('.vlec__section__grid__element__8__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__13').mouseenter(function(){
                $('.vlec__section__grid__element__8__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__13').mouseleave(function(){
                $('.vlec__section__grid__element__8__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__14').mouseenter(function(){
                $('.vlec__section__grid__element__8__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__14').mouseleave(function(){
                $('.vlec__section__grid__element__8__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__15').mouseenter(function(){
                $('.vlec__section__grid__element__8__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__15').mouseleave(function(){
                $('.vlec__section__grid__element__8__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__16').mouseenter(function(){
                $('.vlec__section__grid__element__8__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__16').mouseleave(function(){
                $('.vlec__section__grid__element__8__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__17').mouseenter(function(){
                $('.vlec__section__grid__element__8__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__17').mouseleave(function(){
                $('.vlec__section__grid__element__8__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__18').mouseenter(function(){
                $('.vlec__section__grid__element__8__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__18').mouseleave(function(){
                $('.vlec__section__grid__element__8__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__19').mouseenter(function(){
                $('.vlec__section__grid__element__8__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__19').mouseleave(function(){
                $('.vlec__section__grid__element__8__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__20').mouseenter(function(){
                $('.vlec__section__grid__element__8__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__20').mouseleave(function(){
                $('.vlec__section__grid__element__8__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

//9


              $('.vlec__section__grid__element__9__1').mouseenter(function(){
                $('.vlec__section__grid__element__9__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__9__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__1').mouseleave(function(){
                $('.vlec__section__grid__element__9__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__2').mouseenter(function(){
                $('.vlec__section__grid__element__9__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__2').mouseleave(function(){
                $('.vlec__section__grid__element__9__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__3').mouseenter(function(){
                $('.vlec__section__grid__element__9__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__3').mouseleave(function(){
                $('.vlec__section__grid__element__9__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__4').mouseenter(function(){
                $('.vlec__section__grid__element__9__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__4').mouseleave(function(){
                $('.vlec__section__grid__element__9__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__5').mouseenter(function(){
                $('.vlec__section__grid__element__9__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__5').mouseleave(function(){
                $('.vlec__section__grid__element__9__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__6').mouseenter(function(){
                $('.vlec__section__grid__element__9__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__6').mouseleave(function(){
                $('.vlec__section__grid__element__9__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__7').mouseenter(function(){
                $('.vlec__section__grid__element__9__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__7').mouseleave(function(){
                $('.vlec__section__grid__element__9__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__8').mouseenter(function(){
                $('.vlec__section__grid__element__9__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__8').mouseleave(function(){
                $('.vlec__section__grid__element__9__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__9').mouseenter(function(){
                $('.vlec__section__grid__element__9__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__9').mouseleave(function(){
                $('.vlec__section__grid__element__9__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__10').mouseenter(function(){
                $('.vlec__section__grid__element__9__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__10').mouseleave(function(){
                $('.vlec__section__grid__element__9__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__11').mouseenter(function(){
                $('.vlec__section__grid__element__9__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__11').mouseleave(function(){
                $('.vlec__section__grid__element__9__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__12').mouseenter(function(){
                $('.vlec__section__grid__element__9__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__12').mouseleave(function(){
                $('.vlec__section__grid__element__9__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__13').mouseenter(function(){
                $('.vlec__section__grid__element__9__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__13').mouseleave(function(){
                $('.vlec__section__grid__element__9__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__14').mouseenter(function(){
                $('.vlec__section__grid__element__9__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__14').mouseleave(function(){
                $('.vlec__section__grid__element__9__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__15').mouseenter(function(){
                $('.vlec__section__grid__element__9__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__15').mouseleave(function(){
                $('.vlec__section__grid__element__9__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__16').mouseenter(function(){
                $('.vlec__section__grid__element__9__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__16').mouseleave(function(){
                $('.vlec__section__grid__element__9__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__17').mouseenter(function(){
                $('.vlec__section__grid__element__9__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__17').mouseleave(function(){
                $('.vlec__section__grid__element__9__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__18').mouseenter(function(){
                $('.vlec__section__grid__element__9__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__18').mouseleave(function(){
                $('.vlec__section__grid__element__9__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__19').mouseenter(function(){
                $('.vlec__section__grid__element__9__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__19').mouseleave(function(){
                $('.vlec__section__grid__element__9__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__20').mouseenter(function(){
                $('.vlec__section__grid__element__9__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__20').mouseleave(function(){
                $('.vlec__section__grid__element__9__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

            }



               // newElement.style.position = 'relative';
              // var textNode = element.snippet.title;
              // textNode.style.position = 'absolute';
              // newElement.append(textNode);
                // topic = element.snippet.title.split(':')[1];
                // if ( subject == element.snippet.localized.title.split(':')[0] ){
                    // var playlistId = element.id;
                    // console.log(topic +': ' + playlistId);
                    // thumbnailURLs.push(element.snippet.thumbnails.maxres.url);
                    // generateSection(subjectAbr, topic, playlistId);
                // }
            });
        });
    }

    function generateElement (count){
    }

    function loadVideos(playlistId){

    }

    function loadPlaylists(subject, subjectAbr){
        var i = 0;
        $.getJSON(URL, options, function(data){
            console.log(data.items);
            data.items.forEach(function(element){
                topic = element.snippet.localized.title.split(':')[1];
                if ( subject == element.snippet.localized.title.split(':')[0] ){
                    var playlistId = element.id;
                    console.log(topic +': ' + playlistId);
                    console.log(topic);
                    // thumbnailURLs.push(element.snippet.thumbnails.maxres.url);
                    i++;
                    generateSection(i, subjectAbr, topic, playlistId);
                }
            });
        });
    }


    //
    // generateSection();
    loadPlaylists(subject, subjectAbr);

    //Data
    var playlists = {
      'Applied Chemistry' : NULL
    }


    //Replace the following Data Structures with Maps

});
