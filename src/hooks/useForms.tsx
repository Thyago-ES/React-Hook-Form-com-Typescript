import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserFormSchema, userFormSchema } from "../schemas/userFormSchema";

export const useForms = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserFormSchema>({
		resolver: zodResolver(userFormSchema),
	});

	return { register, handleSubmit, errors };
};
