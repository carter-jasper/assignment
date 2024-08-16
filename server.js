const wonders = [{
    title: "Lagos, Nigeria - 21 Million",
    description: "Lagos is located in the Western Coast of Nigeria and it is the most populous city in Nigeria. Lagos is also home of the largest port of Nigeria.",
    image: "https://www.istanbulafrica.com/wp-content/uploads/elementor/thumbs/Lagos-Nigeria-City-View-1-e1600513503512-ovoyh9zdv8s9ttur9l5xcfkihrv9y2klmqimjdtqcg.jpg",
    coordinates: [6.45407, 3.39467]
}, {
    title: "Cairo, Egypt - 20.5 Million",
    description: "Cairo is the capital of Egypt. It is one of the largest cities in Africa with more than 20 million people living in the urban area. Cairo is located near the Nile Delta, in the center of Egypt. The city is renowned for its historic culture dating back to Ancient Egypt.",
    image: "https://www.istanbulafrica.com/wp-content/uploads/elementor/thumbs/Cairo-Egypt-Africa-City-View-ovoxmb6spqe7cau237ae78vtyshyd1my1gsrd7qnc0.jpg",
    coordinates: [31.2357, 30.0444]
}, {
    title: "Kinshasa, Democratic Republic of Congo - 14.3 Million",
    description: "Kinshasa is located alongside the Congo River and it is facing Brazzaville, Republic of Congo. The city is the capital of the Democratic Republic of Congo (DRC). The economy of DRC is heavily dependent on Kinshasa. The official language is French.",
    image: "https://www.istanbulafrica.com/wp-content/uploads/elementor/thumbs/Kinshasa-DR-Congo-Africa-City-View-ovoxsu6g6bbvytcpz0v4ill2h4bptdju9rw5ce284g.jpg",
    coordinates: [-4.303056, 15.303333]
}, {
    title: "Dar es Salaam, Tanzania - 6 Million",
    description: "Dar es Salaam is the largest city of Tanzania with a population of more than 6 million people. Although the capital is Dodoma, many government offices and embassies are located in Dar es Salaam.",
    image: "https://www.istanbulafrica.com/wp-content/uploads/elementor/thumbs/Dar-es-Salaam-Tanzania-Africa-City-View-ovoxodg1pn7uthu71ldx6858w8by94tqnoc4a2ojog.jpg",
    coordinates: [-6.8165, 39.2894]
}, {
    title: "Johannesburg, South Africa - 5.8 Million",
    description: "Johannesburg is the largest city in South Africa and the financial heart of the country. Most of the international companies and banks are located in the city.",
    image: "https://www.istanbulafrica.com/wp-content/uploads/elementor/thumbs/Johannesburg-South-Africa-Africa-City-View-e1600512981541-ovoy3nbmrq4lhdngup2o6vdwen1oc2gpr9z60y18kg.jpg",
    coordinates: [-26.2056, 28.0337]

}];

const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const content = document.getElementById('content');

// Function to update the content and map view
function updateContent(index) {
    const wonder = wonders[index];
    content.classList.add('hidden');
    // Reset animation by hiding content
    setTimeout(()=>{
        document.getElementById('title').innerText = wonder.title;
        document.getElementById('description').innerText = wonder.description;
        document.getElementById('image').src = wonder.image;
        document.getElementById('image').alt = wonder.title;
        content.classList.remove('hidden');
        // Trigger fade-in animation
        map.setView(wonder.coordinates, 5);
        // Move the map to the selected wonder
    }
    , 200);
    // Delay to allow hiding effect
}

// Create markers and navigation buttons
wonders.forEach((wonder,index)=>{
    // Add map markers
    const marker = L.marker(wonder.coordinates).addTo(map);
    marker.on('click', ()=>updateContent(index));

    // Add navigation buttons
    const nav = document.getElementById('nav');
    const button = document.createElement('button');
    button.innerText = wonder.title;
    button.onclick = ()=>updateContent(index);
    const listItem = document.createElement('li');
    listItem.appendChild(button);
    nav.appendChild(listItem);
}
);

// Initialize with the first wonder
updateContent(0);
