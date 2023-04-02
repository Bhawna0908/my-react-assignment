import { useState } from 'react';
import { Checkbox } from './components/Form/Checkbox';
import { Input } from './components/Form/Input';
import { Radio } from './components/Form/Radio';
import { Select } from './components/Form/Select';
import { Layout } from './components/Layout';

const options = [
  {
    label: 'Single',
    value: 'single',
  },
  {
    label: 'Bohot jayada Single',
    value: 'bohot jayada single',
  },
  {
    label: 'Bhag yahan se',
    value: 'bhag yahan se',
  },
];

function App() {
  const [form, setForm] = useState({
    name: '',
    age: 0,
    email: '',
    gender: '',
    skills: [],
    marital_status: options[0].value,
  });

  const handleChange = (e) => {
    if (e.target.name !== 'skills') {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));

      return;
    }

    let updatedSkills = [];

    if (form.skills.includes(e.target.value)) {
      updatedSkills = form.skills.filter((skill) => skill !== e.target.value);
    } else {
      updatedSkills = [...form.skills, e.target.value];
    }

    setForm((prev) => ({
      ...prev,
      skills: updatedSkills,
    }));
  };

  return (
    <Layout>
      <section className="flex flex-col gap-4 max-w-3xl m-auto">
        <h3 className="text-3xl font-bold mb-4">Create Something...</h3>

        <Input
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          label="Age"
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />

        <div className="flex flex-col gap-2">
          <span>Gender</span>

          <div className="flex items-center gap-4">
            {['male', 'female', 'other'].map((item) => (
              <Radio
                key={item}
                label={item}
                name="gender"
                value={item}
                checked={form.gender === item}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span>Skills</span>

          <div className="flex items-center gap-4">
            {['Web dev', 'android', 'desktop', 'other'].map((item) => (
              <Checkbox
                key={item}
                label={item}
                name="skills"
                value={item}
                checked={form.skills.includes(item)}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>

        <Select
          label="Marital Status"
          name="marital_status"
          options={options}
          selected={form.marital_status}
          onChange={handleChange}
        />

        <button className="bg-green-400 text-green-900 rounded-lg p-4 mt-2">
          Submit
        </button>
      </section>
    </Layout>
  );
}

export default App;
